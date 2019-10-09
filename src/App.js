import React from 'react';
import './App.css';
import Home from '../src/pages/home.js';
import Vote from './pages/vote.js';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/vote' component={Vote}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
