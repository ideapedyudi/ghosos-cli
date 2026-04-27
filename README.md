# Ghosos-CLI 👻

**Ghosos-CLI** adalah alat investigasi username (OSINT) yang beroperasi secara "siluman" (Ghost-mode). Aplikasi ini mengecek ketersediaan username di berbagai platform sosial media dengan kecepatan tinggi melalui pemrosesan asinkron Node.js dan tampilan terminal yang estetik.

## Fitur Utama
- **Parallel Scanning:** Pengecekan cepat menggunakan `Promise.allSettled`.
- **Ghost-Identity:** Rotasi `User-Agent` otomatis untuk menghindari deteksi bot.
- **Advanced Validation:** Validasi konten untuk meminimalisir false-positive.
- **Interactive UI:** Progress bar dinamis dan tabel hasil yang rapi.

## Instalasi
```bash
# Clone repository
git clone https://github.com/ideapedyudi/ghosos-cli.git

# Masuk ke direktori
cd ghosos-cli

# Install dependensi
npm install

# Link command secara global (opsional)
npm link
```

## Penggunaan
```bash
ghosos <username>
```

## Teknologi
- [Node.js](https://nodejs.org/)
- [Commander.js](https://github.com/tj/commander.js/)
- [Axios](https://github.com/axios/axios)
- [Chalk](https://github.com/chalk/chalk)
- [Ora](https://github.com/sindresorhus/ora)
- [User-Agents](https://github.com/intoli/user-agents)
