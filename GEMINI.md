# Project Specification: Ghosos-CLI 👻

## 1. Vision & Purpose
**Ghosos-CLI** is a "stealth-mode" username investigation tool (OSINT). This application checks username availability across various social media platforms with high speed through Node.js asynchronous processing and an aesthetic terminal display (Cyberpunk/Dark mode).

## 2. Technical Stack
- **Runtime:** Node.js (Version 18+ recommended)
- **Language:** JavaScript (ESM)
- **Primary Libraries:**
  - `commander`: For CLI argument parsing.
  - `axios`: For HTTP requests.
  - `chalk`: For terminal color styling.
  - `ora`: For elegant animated spinners.
  - `cli-table3`: For neat final result tables.
  - `user-agents`: For rotating browser identities (Ghost Mode).

## 3. Core Features (The "Ghost" Signature)
- **Parallel Scanning:** Performs checks on 20+ platforms simultaneously using `Promise.allSettled`.
- **Ghost-Identity:** Automatic `User-Agent` rotation on every request to avoid bot detection.
- **Advanced Validation:** Does not just check for 404 status codes, but also performs content validation (avoiding false-positives).
- **Interactive UI:** Dynamic progress bar display that changes colors during scanning.

## 4. File Structure
```text
ghosos-cli/
├── bin/
│   └── ghosos.js        # Entry point & CLI Configuration
├── src/
│   ├── engine/
│   │   └── scanner.js   # Core scanning logic
│   ├── data/
│   │   └── platforms.js # List of URLs & rules for each social media
│   └── utils/
│       ├── ghost-ua.js  # Random User-Agent generator
│       └── logger.js    # Display formatter (Chalk)
├── package.json
└── README.md
```

## 5. Project Status & Roadmap
- [x] Initial CLI setup with Commander.js
- [x] Multi-platform asynchronous scanning
- [x] Ghost-Mode User-Agent rotation
- [x] Aesthetic UI with Chalk and Ora
- [x] Automated Ignitor script (`yarn ignite`)
- [x] Unit testing with Mocha & Chai
- [ ] Support for 50+ platforms
- [ ] Export results to JSON/CSV
- [ ] Interactive mode for multi-username search