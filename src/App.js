import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import ListProducts from './pages/ListProduct';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </header>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
          <Route exact path="/cart" render={ (props) => <Cart { ...props } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}
