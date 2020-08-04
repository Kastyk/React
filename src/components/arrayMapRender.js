import React, { Component } from 'react';

const textAreaStyles = {
  width: 235,
  margin: 5,
};

class ArrayMapRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      toDoList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray,
    });
  }
  render() {
    const items = this.state.toDoList.map((curr, index) => <li key={index}>{curr}</li>);
    return (
      <div>
        <textarea
          style={textAreaStyles}
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
export default ArrayMapRender;
