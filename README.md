# E-commerce UI Automation Framework

This repository contains an automated UI testing framework for the [Practice Software Testing](https://practicesoftwaretesting.com/) demo platform. 

## 🛠 Tech Stack
* **Test Runner / Automation Tool**: [Playwright](https://playwright.dev/)
* **Language**: TypeScript
* **Design Patterns**: Page Object Model (POM) + Custom Fixtures

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/Eugenekms/playwright_shop.git](https://github.com/Eugenekms/playwright_shop.git)
cd playwright_shop
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
This project requires environment variables for authentication tests.
1. Create a `.env` file in the root directory.
2. Copy the contents from `.env.example` into your new `.env` file. The default test credentials are provided there.

### 4. Run Tests
Execute tests in headless mode (default):
```bash
npx playwright test
```

Execute tests in UI mode (highly recommended for debugging):
```bash
npx playwright test --ui
```