# Tic Tac Toe Game

A modern, responsive implementation of the classic Tic Tac Toe game built with React. This web application offers both 2-player and AI opponent modes with a clean, minimalist interface.

![Game Preview](./src/assets/game-preview.png)

## Features

- 🎮 Two-player mode for local multiplayer
- 🤖 AI opponent mode (coming soon)
- 📱 Responsive design for both desktop and mobile
- 🎯 Real-time game state display
- 🔄 Quick restart functionality
- 🎨 Modern, minimalist UI with smooth animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe-web-game/tic_tac_toe_frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:
```bash
npm run build
```

The build files will be created in the `build` folder.

## Game Rules

1. The game is played on a 3x3 grid
2. Players take turns placing their marker (X or O)
3. The first player to get 3 of their markers in a row (horizontally, vertically, or diagonally) wins
4. If all squares are filled and no player has won, the game is a draw

## Project Structure

```
tic_tac_toe_frontend/
├── src/
│   ├── components/
│   │   └── Board.js         # Game board component
│   ├── utils/
│   │   └── gameLogic.js     # Game logic utilities
│   ├── App.js              # Main application component
│   ├── App.css             # Application styles
│   └── index.js            # Application entry point
├── public/
└── package.json
```

## Styling

The application uses a modern color scheme:
- Primary: `#1976d2` (Blue)
- Secondary: `#90caf9` (Light Blue)
- Accent: `#ff7043` (Orange)

Custom CSS variables are used throughout the application for consistent theming.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React.js team for the amazing framework
- The open-source community for inspiration and resources
