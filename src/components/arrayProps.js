import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArrayProps extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>{this.props.colors.join(', ')}</p>;
  }
}
ArrayProps.defaultProps = {
  colors: [['black', 'red', 'white', 'papaya']],
};
ArrayProps.propTypes = {
  colors: PropTypes.array.isRequired,
};
export default ArrayProps;
