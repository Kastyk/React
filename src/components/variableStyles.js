import React, { Component } from 'react';

const styles = {
  color: 'purple',
  fontSize: 40,
  border: '2px solid purple',
};
class VariableStyles extends Component {
  render() {
    return <div style={styles}>Style Me!</div>;
  }
}
export default VariableStyles;
