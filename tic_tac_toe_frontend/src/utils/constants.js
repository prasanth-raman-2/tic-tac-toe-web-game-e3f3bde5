export const GAME_CONSTANTS = {
  BOARD_SIZE: 3,
  PLAYERS: {
    X: 'X',
    O: 'O',
  },
  GAME_MODES: {
    TWO_PLAYER: 'TWO_PLAYER',
    VS_AI: 'VS_AI',
  },
  AI_DIFFICULTY: {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
  },
};

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6],
];

export const UI_MESSAGES = {
  WINNER: (player) => `🎉 Winner: ${player} 🎉`,
  DRAW: "🤝 It's a Draw! 🤝",
  NEXT_TURN: (player) => `Player ${player}'s Turn`,
  RESTART: 'Restart Game',
  MODE_TOGGLE: 'Change Mode',
};
