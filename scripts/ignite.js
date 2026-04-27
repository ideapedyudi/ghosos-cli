import { execSync } from 'child_process';
import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs';
import path from 'path';

/**
 * Ghosos-CLI Ignitor Script
 * Digunakan untuk inisialisasi dan setup project secara otomatis.
 */

const ignite = async () => {
  console.log(chalk.magenta.bold('\n🔥 GHOSOS-CLI IGNITOR IS STARTING...'));
  
  const spinner = ora();

  // 1. Cek folder node_modules
  spinner.start('Memeriksa dependensi...');
  if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    spinner.warn('node_modules tidak ditemukan. Menjalankan yarn install...');
    try {
      execSync('yarn install', { stdio: 'inherit' });
      spinner.succeed('Dependensi berhasil diinstal.');
    } catch (e) {
      spinner.fail('Gagal menginstal dependensi. Pastikan Yarn sudah terinstal.');
      process.exit(1);
    }
  } else {
    spinner.succeed('Dependensi sudah siap.');
  }

  // 2. Jalankan Test
  spinner.start('Menjalankan integrasi test...');
  try {
    execSync('yarn test', { stdio: 'pipe' });
    spinner.succeed('Sistem inti (Engine) berfungsi dengan baik.');
  } catch (e) {
    spinner.fail('Integrasi test gagal. Periksa koneksi internet atau engine scanner.');
    process.exit(1);
  }

  // 3. Link Command
  spinner.start('Menghubungkan perintah "ghosos" secara global...');
  try {
    // Gunakan npm link agar ghosos bisa diakses langsung
    execSync('npm link', { stdio: 'pipe' });
    spinner.succeed('CLI berhasil di-link secara global!');
  } catch (e) {
    spinner.warn('Gagal melakukan linking global (mungkin perlu akses admin/sudo).');
    console.log(chalk.gray('Info: Anda masih bisa menggunakan "node bin/ghosos.js <username>"'));
  }

  console.log(chalk.green.bold('\n✨ GHOSOS-CLI SIAP DIGUNAKAN!'));
  console.log(chalk.cyan('Ketik: "ghosos <username>" untuk mulai berburu.\n'));
};

ignite();
