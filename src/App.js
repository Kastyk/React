import React, { Component } from 'react';
import './main.css';
import JSX from './components/simpleJSX';
import Description from './components/statelessFunctionalComponent';
import List from './components/reactComponent';
import ArrayProps from './components/arrayProps';
import Stateful from './components/statefulComponent';
import Counter from './components/counter';
import ControlledInput from './components/controlledInput';
import ControlledForm from './components/controlledForm';
import JustAnApp from './components/stateAsPropsChild';
import CallbackProps from './components/callbackProps';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {JSX}
        <Description name="Kamil" />
        <List />
        <ArrayProps />
        <Stateful />
        <Counter multipier={2} />
        <ControlledInput />
        <ControlledForm />
        <JustAnApp />
        <CallbackProps />
      </div>
    );
  }
}
export default App;
