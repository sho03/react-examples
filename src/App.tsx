import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AccordionSample } from './examples/accordion/AccordionSample';
import { Home } from './examples/Home';
import { Header } from './examples/components/Header';
import { StateAndEffectExample } from './examples/hooks/stateAndEffect/StateAndEffectExample';
import MemoSample from './examples/hooks/usememo/MemoSample';
import { Graph } from './examples/recharts_sample/Graph';

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
          <Route exact path ="/UseMemoSample">
            <MemoSample/>
          </Route>
          <Route exact path ="/graph">
            <Graph/>
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
