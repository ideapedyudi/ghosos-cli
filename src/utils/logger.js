import chalk from 'chalk';

/**
 * Logger utility untuk memformat tampilan terminal.
 */
export const logger = {
  info: (msg) => console.log(chalk.blue('ℹ ') + msg),
  success: (msg) => console.log(chalk.green('✔ ') + msg),
  warn: (msg) => console.log(chalk.yellow('⚠ ') + msg),
  error: (msg) => console.log(chalk.red('✖ ') + msg),
  ghost: (msg) => console.log(chalk.magenta('👻 ') + chalk.italic(msg)),
  title: (msg) => {
    console.log('\n' + chalk.bgMagenta.black.bold(` ${msg} `) + '\n');
  }
};
