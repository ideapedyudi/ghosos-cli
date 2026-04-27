#!/usr/bin/env node

import { Command } from 'commander';
import ora from 'ora';
import Table from 'cli-table3';
import chalk from 'chalk';
// @ts-ignore
import CFonts from 'cfonts';
import { platforms } from '../src/data/platforms.js';
import { scanAll, ScanResult } from '../src/engine/scanner.js';
import { logger } from '../src/utils/logger.js';

const program = new Command();

program
  .name('ghosos')
  .description('Ghost-mode Username OSINT Investigation Tool')
  .version('1.0.1')
  .argument('<username>', 'Username to investigate')
  .action(async (username: string) => {
    // 1. Tampilkan Judul ASCII yang Keren
    CFonts.say('GHOSOS', {
      font: 'block',
      align: 'left',
      colors: ['magenta', 'candy'],
      background: 'transparent',
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: '0',
    });

    logger.title(`INVESTIGATING TARGET: ${chalk.bold.underline(username)}`);
    
    const spinner = ora({
      text: `Stealthily tracking ${chalk.magenta(username)} across the web...`,
      color: 'magenta'
    }).start();

    try {
      const results = await scanAll(platforms, username);
      spinner.succeed(`Intelligence gathering completed for ${chalk.bold(username)}`);

      const table = new Table({
        head: [
          chalk.magenta.bold('PLATFORM'), 
          chalk.magenta.bold('STATUS'), 
          chalk.magenta.bold('SOURCE URL')
        ],
        style: {
          head: [], // Nonaktifkan warna default untuk menggunakan chalk
          border: ['gray']
        }
      });

      results.forEach((res) => {
        if (res.status === 'fulfilled') {
          const { platform, status, url } = res.value;
          let statusStyled: string;

          switch (status) {
            case 'AVAILABLE':
              statusStyled = chalk.red.bold('NOT FOUND');
              break;
            case 'TAKEN':
              statusStyled = chalk.green.bold('FOUND');
              break;
            default:
              statusStyled = chalk.yellow(status);
          }

          table.push([
            chalk.white(platform), 
            statusStyled, 
            chalk.gray(url)
          ]);
        }
      });

      console.log(table.toString());
      logger.ghost('Investigation complete. The ghost fades back into the shadows.');

    } catch (error: any) {
      spinner.fail('Critical failure during intelligence gathering.');
      logger.error(error.message);
    }
  });

program.parse();
