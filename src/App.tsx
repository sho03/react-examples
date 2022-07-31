import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AccordionSample } from './examples/accordion/AccordionSample';
import { Home } from './examples/Home';
import { Header } from './examples/components/Header';
import { StateAndEffectExample } from './examples/hooks/stateAndEffect/StateAndEffectExample';
import Main from './examples/hooks/useContext/Main';
import MemoSample from './examples/hooks/usememo/MemoSample';
import { Graph } from './examples/recharts_sample/Graph';
import { KeyErrorTest } from './examples/keyErrorTest/KeyErrorTest';
import { CodeMirrorExample } from './examples/codeMirrorExample/CodeMirrorExample';
import InputEvents from './examples/inputEvents/InputEvents';
import HookFormExample from './examples/react-hook-form/HookFormExample';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path ="/Accordion">
            <AccordionSample/>
          </Route>
          <Route exact path ="/UseStateAndUseEffectExample">
            <StateAndEffectExample/>
          </Route>
          <Route exact path ="/UseContextExample">
            <Main/>
          </Route>
          <Route exact path ="/UseMemoSample">
            <MemoSample/>
          </Route>
          <Route exact path ="/graph">
            <Graph/>
          </Route>
          <Route exact path ="/keyError">
            <KeyErrorTest/>
          </Route>
          <Route exact path ="/codeMirror">
            <CodeMirrorExample/>
          </Route>
          <Route exact path ="/inputEvents">
            <InputEvents/>
          </Route>
          <Route exact path ="/hookForm">
            <HookFormExample/>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
