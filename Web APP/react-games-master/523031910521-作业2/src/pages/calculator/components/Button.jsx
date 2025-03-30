import PropTypes from 'prop-types';

export const CalculatorButton = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={`p-4 rounded ${className}`}
  >
    {children}
  </button>
);

CalculatorButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};