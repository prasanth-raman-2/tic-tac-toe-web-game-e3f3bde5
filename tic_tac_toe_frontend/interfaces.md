# Tic Tac Toe Frontend Interfaces

## Component Interfaces

### Board Component
- **Props**:
  - `squares`: Array<string> - Current state of the game board
  - `onClick`: (index: number) => void - Handler for square clicks

### PlayerInfo Component
- **Props**:
  - `currentPlayer`: string - Current player's symbol (X/O)
  - `winner`: string | null - Winner of the game or null

## Custom Hooks

### useWindowSize
- **Returns**: { width: number, height: number }
- **Purpose**: Provides responsive design capabilities by tracking window dimensions

## Utility Functions

### gameLogic.js
- `calculateWinner(squares: Array<string>)`: Determines game winner
- `isBoardFull(squares: Array<string>)`: Checks if game board is full

### helpers.js
- `formatPlayerName(name: string)`: Formats player names
- `getRandomInt(min: number, max: number)`: Generates random numbers for AI moves

## Theme Configuration
- Primary color: #1976d2
- Secondary color: #90caf9
- Accent color: #ff7043

## Service Worker
- Provides PWA capabilities
- Handles offline functionality
- Manages cache updates

## Responsive Breakpoints
- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px

## State Management
Game state is managed through React's useState hook in the App component:
- `squares`: Array<string> - Game board state
- `isXNext`: boolean - Current player tracker
- `winner`: string | null - Game winner status
