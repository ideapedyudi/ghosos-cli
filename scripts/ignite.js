import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';

/**
 * Ghosos-CLI Ignitor Script
 * Used for automatic project initialization and setup.
 */

const ignite = async () => {
  console.log(chalk.magenta.bold('\n🔥 GHOSOS-CLI IGNITOR IS STARTING...'));
  
  const spinner = ora();

  // 1. Check node_modules folder
  spinner.start('Checking dependencies...');
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    spinner.warn('node_modules not found. Running yarn install...');
    try {
      execSync('yarn install', { stdio: 'inherit' });
      spinner.succeed('Dependencies successfully installed.');
    } catch (e) {
      spinner.fail('Failed to install dependencies. Make sure Yarn is installed.');
      process.exit(1);
    }
  } else {
    spinner.succeed('Dependencies are ready.');
  }

  // 2. Run Tests
  spinner.start('Running integration tests...');
  try {
    execSync('yarn test', { stdio: 'pipe' });
    spinner.succeed('Core system (Engine) is functioning correctly.');
  } catch (e) {
    spinner.fail('Integration tests failed. Check internet connection or scanner engine.');
    process.exit(1);
  }

  // 3. Link Command
  spinner.start('Linking "ghosos" command globally...');
  try {
    // Use npm link so ghosos can be accessed directly
    execSync('npm link', { stdio: 'pipe' });
    spinner.succeed('CLI successfully linked globally!');
  } catch (e) {
    spinner.warn('Failed to perform global linking (admin/sudo access may be required).');
    console.log(chalk.gray('Info: You can still use "node bin/ghosos.js <username>"'));
  }

  console.log(chalk.green.bold('\n✨ GHOSOS-CLI IS READY TO USE!'));
  console.log(chalk.cyan('Type: "ghosos <username>" to start hunting.\n'));
};

ignite();
