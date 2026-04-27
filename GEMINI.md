# Project Specification: Ghosos-CLI 👻

## 1. Vision & Purpose
**Ghosos-CLI** adalah alat investigasi username (OSINT) yang beroperasi secara "siluman" (Ghost-mode). Aplikasi ini mengecek ketersediaan username di berbagai platform sosial media dengan kecepatan tinggi melalui pemrosesan asinkron Node.js dan tampilan terminal yang estetik (Cyberpunk/Dark mode).

## 2. Technical Stack
- **Runtime:** Node.js (Version 18+ recommended)
- **Language:** JavaScript (ESM)
- **Primary Libraries:**
  - `commander`: Untuk CLI argument parsing.
  - `axios`: Untuk HTTP requests.
  - `chalk`: Untuk styling warna terminal.
  - `ora`: Untuk animated spinners yang elegan.
  - `cli-table3`: Untuk tabel hasil akhir yang rapi.
  - `user-agents`: Untuk merotasi identitas browser (Ghost Mode).

## 3. Core Features (The "Ghost" Signature)
- **Parallel Scanning:** Melakukan pengecekan ke 20+ platform sekaligus menggunakan `Promise.allSettled`.
- **Ghost-Identity:** Rotasi `User-Agent` otomatis pada setiap request untuk menghindari bot detection.
- **Advanced Validation:** Tidak hanya cek status code 404, tapi juga melakukan validasi konten (menghindari false-positive).
- **Interactive UI:** Tampilan progress bar yang berganti warna secara dinamis saat memindai.

## 4. Proposed File Structure
```text
ghosos-cli/
├── bin/
│   └── ghosos.js        # Entry point & CLI Configuration
├── src/
│   ├── engine/
│   │   └── scanner.js   # Logika inti pengecekan
│   ├── data/
│   │   └── platforms.js # Daftar URL & Rule tiap social media
│   └── utils/
│       ├── ghost-ua.js  # Generator User-Agent acak
│       └── logger.js    # Formatter tampilan (Chalk)
├── package.json
└── README.md