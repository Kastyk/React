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
import DidMount from './components/didMount';
import EventListener from './components/eventListener';
import ShouldUpdate from './components/shouldUpdate';
import InlineStyles from './components/inlineStyles';
import VariableStyles from './components/variableStyles';
import AdvancedRender from './components/advancedRender';
import IfElseRender from './components/ifElseRender';
import ConciseConditional from './components/conciseConditional';
import PropsRenderConditionally from './components/propsRenderConditionally';
import ChangeCssConditionally from './components/changeCssConditionally';
import ArrayMapRender from './components/arrayMapRender';
import KeyAttribute from './components/keyAttribute';
import ArrayFilter from './components/arrayFilter';
import RenderToString from './RenderToString';
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
        <DidMount />
        <EventListener />
        <ShouldUpdate />
        <InlineStyles />
        <VariableStyles />
        <AdvancedRender />
        <IfElseRender />
        <ConciseConditional />
        <PropsRenderConditionally />
        <ChangeCssConditionally />
        <ArrayMapRender />
        <KeyAttribute />
        <ArrayFilter />
        <RenderToString />
      </div>
    );
  }
}
export default App;
