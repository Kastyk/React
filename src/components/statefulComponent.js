import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Imię',
    };
  }
  render() {
    return <p>{this.state.name}</p>;
  }
}
export default Stateful;
