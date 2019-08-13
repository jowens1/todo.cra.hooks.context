/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { type, name, handleClick } = props;
  return (
    <Fragment>
      <button
        type={type}
        className={styles.button}
        onClick={() => handleClick()}
      >
        {name}
      </button>
    </Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
