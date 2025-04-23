# Contributing to Open CVT

Welcome to the Open CVT project! We're excited that you're interested in contributing. This document provides guidelines and instructions to help you get started.

## 🛠 Development Setup

### Prerequisites

- Node.js (v16+)
- npm (Package Manager)

### Initial Setup

1. Clone the repository
   ```bash
   git clone https://github.com/horaciosdev/open-cvt.git
   cd open-cvt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## Development Workflow

### Building the Project

```bash
# Compile TypeScript to JavaScript
npm run build
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Code Quality

```bash
# Run TypeScript type checking
npx tsc --noEmit

# Lint the code
npx eslint .
```

## Submitting Changes

1. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes
   - Follow TypeScript best practices
   - Add or update tests for your changes
   - Ensure all tests pass

3. Commit your changes
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

4. Push your branch and create a Pull Request

## 🤝 Code of Conduct

- Write clean, readable, and well-documented code
- Follow TypeScript best practices
- Write comprehensive tests
- Maintain clear and concise documentation
- Be respectful and collaborative

## 🐛 Reporting Issues

1. Check existing issues to avoid duplicates
2. Use GitHub Issues to report bugs
3. Provide a clear and detailed description
4. Include steps to reproduce the issue
5. Share your environment details (Node.js version, OS, etc.)

## 📦 Publishing (For Maintainers)

1. Ensure all tests pass
   ```bash
   npm test
   ```

2. Update version using semantic versioning
   ```bash
   npm version patch   # for bug fixes
   npm version minor   # for new features
   npm version major   # for breaking changes
   ```

3. Publish to npm
   ```bash
   npm publish
   ```

## 📝 Documentation

- Keep the README.md up to date
- Document new features and API changes
- Update inline code comments

Thank you for contributing to Open CVT!