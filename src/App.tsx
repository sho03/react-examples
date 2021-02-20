import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AccordionSample } from './examples/accordion/AccordionSample';
import { Home } from './examples/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path ="/Accordion">
            <AccordionSample />
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
