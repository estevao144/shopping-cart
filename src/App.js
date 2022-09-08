import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ListProducts from './pages/ListProduct';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
        </Switch>
      </BrowserRouter>
    );
  }
}
