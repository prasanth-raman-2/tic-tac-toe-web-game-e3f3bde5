/**
 * Format player name with proper styling
 * @param {string} name - Player name or symbol
 * @returns {string} Formatted player name
 */
export const formatPlayerName = (name) => {
  return name ? name.toUpperCase() : '';
};

/**
 * Check if the game board is full
 * @param {Array} squares - Game board squares
 * @returns {boolean} True if board is full
 */
export const isBoardFull = (squares) => {
  return squares.every(square => square !== null);
};

/**
 * Get random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
