import React, {Component, Fragment} from 'react';
import Canvas from './Canvas';
import './App.css';
import {Directions, updateCoordsInDirection, correctBeyondBorderPosition} from "./utils";

const moveSnipes = snipes => snipes.map(snipe => {
  // if (loopCount % 5 === 0) {
  //   snipe.dir = createRandomDir();
  // }
  snipe = updateCoordsInDirection(snipe, 10);
  const correctedPos = correctBeyondBorderPosition(snipe, 800, 800);
  snipe = {...snipe, ...correctedPos};
  return snipe;
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snipes: [
        {x: 10, y: 10, dir: Directions.DOWN},
        {x: 700, y: 700, dir: Directions.UP}
      ]
    }
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(moveSnipes(this.state.snipes));
      console.dir(this.state);
    }, 1000);
  }

  render() {
    return (
      <Fragment>
        <Canvas snipes={this.state.snipes} />
        <div>snipe 1: {this.state.snipes[0].x}, {this.state.snipes[0].y}, {this.state.snipes[0].dir}</div>
        <div>snipe 2: {this.state.snipes[1].x}, {this.state.snipes[1].y}, {this.state.snipes[1].dir}</div>
      </Fragment>
    );
  }
}

export default App;
