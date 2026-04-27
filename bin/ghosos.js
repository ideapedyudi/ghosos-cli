#!/usr/bin/env node

import { Command } from 'commander';
import ora from 'ora';
import Table from 'cli-table3';
import chalk from 'chalk';
import { platforms } from '../src/data/platforms.js';
import { scanAll } from '../src/engine/scanner.js';
import { logger } from '../src/utils/logger.js';

const program = new Command();

program
  .name('ghosos')
  .description('Ghost-mode Username OSINT Investigation Tool')
  .version('1.0.0')
  .argument('<username>', 'Username yang ingin diinvestigasi')
  .action(async (username) => {
    logger.title(`GHOSOS-CLI: Investigating "${username}"`);
    
    const spinner = ora({
      text: `Memulai pencarian siluman untuk ${chalk.magenta(username)}...`,
      color: 'magenta'
    }).start();

    try {
      const results = await scanAll(platforms, username);
      spinner.succeed(`Pemindaian selesai untuk ${chalk.bold(username)}`);

      const table = new Table({
        head: [
          chalk.cyan('Platform'), 
          chalk.cyan('Status'), 
          chalk.cyan('URL')
        ],
        colWidths: [20, 15, 50]
      });

      results.forEach((res) => {
        if (res.status === 'fulfilled') {
          const { platform, status, url } = res.value;
          let statusStyled;

          switch (status) {
            case 'AVAILABLE':
              statusStyled = chalk.green.bold(status);
              break;
            case 'TAKEN':
              statusStyled = chalk.red.bold(status);
              break;
            default:
              statusStyled = chalk.yellow(status);
          }

          table.push([platform, statusStyled, url]);
        }
      });

      console.log(table.toString());
      logger.ghost('Investigasi selesai. Tetap dalam bayangan.');

    } catch (error) {
      spinner.fail('Terjadi kesalahan fatal dalam pemindaian.');
      logger.error(error.message);
    }
  });

program.parse();
