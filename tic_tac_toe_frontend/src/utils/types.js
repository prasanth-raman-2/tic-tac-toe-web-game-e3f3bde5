import PropTypes from 'prop-types';

export const BoardPropTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
};

export const PlayerInfoPropTypes = {
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string,
};

export const GameStatePropTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string)
  ),
  currentStep: PropTypes.number.isRequired,
  xIsNext: PropTypes.bool.isRequired,
};

export const SquarePropTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  highlight: PropTypes.bool,
};
