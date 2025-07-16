import React from 'react';

/**
 * Component to display current player information and game status
 * @param {Object} props - Component props
 * @param {string} props.currentPlayer - Current player's symbol (X or O)
 * @param {string|null} props.winner - Winner of the game, if any
 */
const PlayerInfo = ({ currentPlayer, winner }) => {
  const getStatusMessage = () => {
    if (winner) {
      return winner === 'Draw' 
        ? "🤝 It's a Draw! 🤝"
        : `🎉 Winner: ${winner} 🎉`;
    }
    return `Player ${currentPlayer}'s Turn`;
  };

  return (
    <div className="player-info">
      <p className="status-message">{getStatusMessage()}</p>
    </div>
  );
};

export default PlayerInfo;
