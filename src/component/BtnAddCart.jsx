import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnAddCart extends Component {
  handleAddToCartButton = async () => {
    const { product } = this.props;
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    if (cartProducts === null) {
      cartProducts = [];
      cartProducts.push(product);
    } else (cartProducts.push(product));
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  };

  render() {
    return (
      <button
        data-testid="product-add-to-cart"
        type="button"
        onClick={ this.handleAddToCartButton }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

BtnAddCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
