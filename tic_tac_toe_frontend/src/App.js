import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { calculateWinner, getAIMove } from './utils/gameLogic';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [isAIMode, setIsAIMode] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const gameWinner = calculateWinner(squares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (isAIMode && !isXNext && !gameWinner) {
      // AI's turn
      const timer = setTimeout(() => {
        const aiMove = getAIMove(squares);
        if (aiMove !== null) {
          handleSquareClick(aiMove);
        }
      }, 500); // Add delay for better UX
      return () => clearTimeout(timer);
    }
  }, [squares, isXNext, isAIMode]);

  const handleSquareClick = (i) => {
    if (squares[i] || winner) return;
    
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const toggleGameMode = () => {
    setIsAIMode(!isAIMode);
    handleRestart();
  };

  const status = winner
    ? winner === 'Draw' 
      ? "🤝 It's a Draw! 🤝"
      : `🎉 Winner: ${winner} 🎉`
    : `Player ${isXNext ? 'X' : 'O'}'s Turn`;

  return (
    <div className="App">
      <div className="game-container">
        <h1 className="game-title">Tic Tac Toe</h1>
        
        <div className="game-status">
          <p>{status}</p>
          {isAIMode && !isXNext && !winner && <p>🤖 AI is thinking...</p>}
        </div>

        <Board squares={squares} onClick={handleSquareClick} />

        <div className="game-controls">
          <button 
            className="control-button mode-toggle"
            onClick={toggleGameMode}
          >
            {isAIMode ? 'Switch to 2 Player' : 'Play vs AI'}
          </button>
          <button 
            className="control-button restart"
            onClick={handleRestart}
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
