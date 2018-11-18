import React, {Component, Fragment} from 'react';
import Canvas from './Canvas';
import './App.css';

const moveSnipes = snipes => snipes.map(snipe => {
  snipe.x = snipe.x + 10;
  snipe.y = snipe.y + 10;
  if (snipe.x > 800 || snipe.x < 0) snipe.x = 0;
  if (snipe.y > 800 || snipe.y < 0) snipe.y = 0;
  return snipe;
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      snipes: [
        {x: 10, y: 10}
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
        <div>snipe 1: {this.state.snipes[0].x}, {this.state.snipes[0].y}</div>
      </Fragment>
    );
  }
}

export default App;
