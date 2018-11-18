import React from 'react';
import PropTypes from 'prop-types';

import Snipe from "./Snipe";

const Canvas = props => {
  const gameHeight = 800;
  const viewBox = [0, 0, gameHeight, gameHeight];

  const onCanvasClick = () => {
    console.log("clicked on main canvas");
  };

  return (
    <svg
      id="game-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      onClick={onCanvasClick}
    >
      {
        props.snipes.map(snipe => <Snipe snipe={snipe} key={snipe.x + " " + snipe.y} />)
      }

    </svg>
  );
};

Canvas.propTypes = {
  snipes: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired
};

export default Canvas;