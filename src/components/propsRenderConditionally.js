import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Results extends Component {
  render() {
    return <h1>{this.props.fiftyFifty ? 'You win!' : 'You lose!'}</h1>;
  }
}
Results.propTypes = {
  fiftyFifty: PropTypes.bool.isRequired,
};
class PropsRenderConditionally extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>Turn: {this.state.counter}</p>
      </div>
    );
  }
}
export default PropsRenderConditionally;
