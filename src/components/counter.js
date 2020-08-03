import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState((state, props) => ({
      counter: state.counter + props.multipier,
    }));
  }
  decrement() {
    this.setState((state, props) => ({
      counter: state.counter - props.multipier,
    }));
  }
  reset() {
    this.setState({
      counter: 0,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.increment}>increment me</button>
        <button onClick={this.reset}>reset me</button>
        <button onClick={this.decrement}>decrement me</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
Counter.propTypes = {
  multipier: PropTypes.number,
};
export default Counter;
