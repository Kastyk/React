import React, { Component } from 'react';

const inputStyle = {
  width: 235,
  margin: 5,
};

class AdvancedRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.ask = this.ask.bind(this);
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }
  ask() {
    if (this.state.userInput) {
      const random = Math.floor(Math.random() * 20);
      this.setState({
        randomIndex: random,
        userInput: '',
      });
    } else {
      throw Error('You must ask for something!');
    }
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful',
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type="text"
          style={inputStyle}
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball</button>
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}
export default AdvancedRender;
