# Contributing to Ireland RAG Assistant

First off, thank you for considering contributing to Ireland RAG Assistant! 🎉

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)

---

## Code of Conduct

This project and everyone participating in it is governed by our commitment to creating a welcoming and inclusive environment. By participating, you are expected to uphold this standard.

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

---

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When creating a bug report, please include:**

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node.js version)

### 💡 Suggesting Features

Feature suggestions are welcome! Please open an issue with:

- A clear and descriptive title
- Detailed description of the proposed feature
- Why this feature would be useful
- Possible implementation approach (optional)

### 📝 Improving Documentation

Documentation improvements are always welcome:

- Fix typos and grammar
- Add missing information
- Improve clarity
- Translate to other languages

### 🔧 Code Contributions

1. Look for issues tagged with `good first issue` or `help wanted`
2. Comment on the issue to let others know you're working on it
3. Fork and clone the repository
4. Create a feature branch
5. Make your changes
6. Submit a pull request

---

## Development Setup

### Prerequisites

- Node.js 18.17+
- Python 3.9+
- npm or yarn or pnpm

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/ireland-rag-assistant.git
cd ireland-rag-assistant

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Running Tests

```bash
# Linting
npm run lint

# Type checking
npx tsc --noEmit
```

---

## Pull Request Process

### Before Submitting

1. **Update documentation** if you changed any APIs or added features
2. **Run linting** with `npm run lint` and fix any issues
3. **Test your changes** thoroughly
4. **Keep commits atomic** - one logical change per commit

### PR Guidelines

1. **Title**: Use a clear, descriptive title
   - ✅ `Add: Turkish language support for error messages`
   - ❌ `Update stuff`

2. **Description**: Include:
   - What changes were made
   - Why these changes were made
   - How to test the changes
   - Screenshots for UI changes

3. **Link Issues**: Reference any related issues with `Fixes #123` or `Relates to #456`

4. **Keep PRs Focused**: One feature or fix per PR

### Review Process

1. A maintainer will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Celebrate! 🎉

---

## Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new files
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for public functions

```typescript
/**
 * Calculates the PAYE tax for a given income
 * @param income - Annual income in euros
 * @param taxCredits - Available tax credits
 * @returns Calculated tax amount
 */
function calculatePAYE(income: number, taxCredits: number): number {
  // Implementation
}
```

### React Components

- Use functional components with hooks
- Use TypeScript interfaces for props
- Keep components focused and reusable

```typescript
interface MessageProps {
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const Message: React.FC<MessageProps> = ({ content, role, timestamp }) => {
  // Implementation
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first approach
- Use CSS variables for theming

### Git Commit Messages

Follow the conventional commits specification:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(chat): add message timestamp display
fix(api): handle webhook timeout errors
docs(readme): add Turkish translation
```

---

## Questions?

If you have questions, feel free to:

1. Open an issue with the `question` label
2. Reach out to the maintainers

Thank you for contributing! 🚀

---

**Cem Koyluoglu** - Project Maintainer

