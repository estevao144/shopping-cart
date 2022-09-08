import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Cart from './pages/Cart';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        </header>
        <Switch>
          <Route path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
