import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CallbackProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <GetInput value={this.state.input} handleChange={this.handleChange} />
        <RenderInput value={this.state.input} />
      </div>
    );
  }
}
class GetInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input type="text" value={this.props.value} onChange={this.props.handleChange} />
      </div>
    );
  }
}
GetInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
class RenderInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.value}</p>
      </div>
    );
  }
}
RenderInput.propTypes = {
  value: PropTypes.string.isRequired,
};
export default CallbackProps;
