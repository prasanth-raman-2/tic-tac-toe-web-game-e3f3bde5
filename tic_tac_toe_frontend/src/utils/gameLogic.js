export const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return squares.every(square => square) ? 'Draw' : null;
};

export const getAIMove = (squares) => {
  // Simple AI: Look for first empty square
  const emptySquares = squares
    .map((square, index) => square ? null : index)
    .filter(index => index !== null);
  
  if (emptySquares.length === 0) return null;
  
  // Pick random empty square for more interesting gameplay
  const randomIndex = Math.floor(Math.random() * emptySquares.length);
  return emptySquares[randomIndex];
};
