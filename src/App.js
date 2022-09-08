import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import ListProducts from './pages/ListProduct';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Link data-testid="shopping-cart-button" to="/Cart">Carrinho</Link>
        </header>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
          <Route exact path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
