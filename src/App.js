import React, { Component } from 'react';
import './App.css';
import Home from '../src/pages/home.js';
import Vote from './pages/vote.js';
import { Route, Switch } from 'react-router-dom';
import Items from './data.js';

export default class App extends Component {

  confirmDetails = () => {
   return Vote
  }
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/vote' component={this.confirmDetails()}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

