import React, { Component } from 'react';

const frontEndFrameworks = ['React', 'Angular', 'Ember', 'Knockout', 'Backbone', 'Vue'];
class KeyAttribute extends Component {
  render() {
    const renderFrameworks = frontEndFrameworks.map((framework, index) => (
      <li key={index}>{framework}</li>
    ));
    return (
      <div>
        <h1>Popular Front End Javascript Frameworks</h1>
        <ul>{renderFrameworks}</ul>
      </div>
    );
  }
}
export default KeyAttribute;
