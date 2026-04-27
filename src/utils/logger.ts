import chalk from 'chalk';

/**
 * Utilitas Logger untuk memformat output terminal.
 */
export const logger = {
  info: (msg: string) => console.log(chalk.blue('ℹ ') + msg),
  success: (msg: string) => console.log(chalk.green('✔ ') + msg),
  warn: (msg: string) => console.log(chalk.yellow('⚠ ') + msg),
  error: (msg: string) => console.log(chalk.red('✖ ') + msg),
  ghost: (msg: string) => console.log(chalk.magenta('👻 ') + chalk.italic(msg)),
  title: (msg: string) => {
    console.log('\n' + chalk.bgMagenta.black.bold(` ${msg} `) + '\n');
  }
};
