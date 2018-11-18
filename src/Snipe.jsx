
import React from 'react';
import PropTypes from 'prop-types';

const Snipe = props => {
  console.log("Snipe", props.snipe);
  return (<rect x={props.snipe.x} y={props.snipe.y} width="5" height="5" stroke="green" fill="green" strokeWidth="5"/>);
};

Snipe.propTypes = {
  snipe: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    dir: PropTypes.string.isRequired
  }).isRequired
};

export default Snipe;
