import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, type, textColor, bgColor, title, disabled, children, onClick }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={`text-${textColor} bg-${bgColor} font-bold text-2xl shadow-button focus:outline-none hover:bg-opacity-75 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children || title}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  textColor: 'white',
  bgColor: 'main-indigo',
  title: '',
  disabled: false,
  children: null,
  onClick: () => {},
};

export default Button;
