# Tic Tac Toe - Developer Guide

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Workflow
1. Start development server:
   ```bash
   npm start
   ```
2. Access the app at `http://localhost:3000`

### Code Structure
```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── assets/        # Static assets
└── styles/        # CSS styles and themes
```

### Coding Standards
- Use functional components with hooks
- Follow React best practices
- Document public interfaces with JSDoc comments
- Use CSS variables for consistent theming
- Write unit tests for new features

### Git Workflow
1. Create feature branch from main
2. Make changes and test locally
3. Submit PR with clear description
4. Address review comments
5. Merge after approval

### Available Scripts
- `npm start`: Run development server
- `npm test`: Run unit tests
- `npm run build`: Create production build
- `npm run lint`: Run ESLint
- `npm run format`: Format with Prettier

### Theme Management
- Use CSS variables from `src/styles/variables.css`
- Use `useTheme` hook for dynamic theme switching
- Follow color palette defined in theme
