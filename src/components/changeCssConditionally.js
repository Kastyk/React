import React, { Component } from 'react';

class ChangeCssConditionally extends Component {
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
    let inputStyle = {
      border: '1px solid black',
    };
    const input = this.state.input;
    if (input.length > 15) {
      inputStyle.border = '3px solid red';
    }
    return (
      <div>
        <h3>Don't Type To Much:</h3>
        <input style={inputStyle} value={input} onChange={this.handleChange} />
      </div>
    );
  }
}
export default ChangeCssConditionally;
