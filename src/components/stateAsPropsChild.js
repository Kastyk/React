import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JustAnApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot',
    };
  }
  render() {
    return <Navbar name={this.state.name} />;
  }
}
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}
Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default JustAnApp;
