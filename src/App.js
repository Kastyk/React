import React, { Component } from 'react';
import './main.css';
import JSX from './components/simpleJSX';
import Description from './components/statelessFunctionalComponent';
import List from './components/reactComponent';
import ArrayProps from './components/arrayProps';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {JSX}
        <Description name="Pastek" />
        <List />
        <ArrayProps />
      </div>
    );
  }
}
export default App;
