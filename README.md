# E-commerce UI Automation Framework

This repository contains an automated UI testing framework for the [Practice Software Testing](https://practicesoftwaretesting.com/) demo platform. 

## 🛠 Tech Stack & Architecture
* **Automation Tool**: [Playwright](https://playwright.dev/)
* **Language**: TypeScript
* **Design Patterns**: Page Object Model (POM), Custom Fixtures
* **Key Features**: 
  * Isolated API and UI testing projects
  * Global setup for UI authentication (saving state to avoid repetitive logins)
  * Dynamic API chaining and negative scenarios handling (401, 404, 423)

## 📁 Project Structure
* `/tests` - Contains UI and API spec files (isolated by Playwright projects)
* `/pages` - Page Object classes (strict separation of actions and assertions)
* `/fixtures` - Custom Playwright fixtures for test setup and state management
* `playwright.config.ts` - Multi-browser and API project configurations

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