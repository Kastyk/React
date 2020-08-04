import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OnlyEvens extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps) {
    console.log('Should I update?');
    if (nextProps.value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}
OnlyEvens.propTypes = {
  value: PropTypes.number.isRequired,
};
class ShouldUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
export default ShouldUpdate;
