import React from 'react';

class Cart extends React.Component {
  state = {
    cartProducts: [],
  };

  componentDidMount() {
    let products = JSON.parse(localStorage.getItem('cartProducts'));
    if (products === null) {
      products = [];
    } else {
      this.setState({ cartProducts: products });
    }
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        { cartProducts.length !== undefined ? cartProducts.map((product) => (
          <div key={ product.id } data-testid="product">
            <span data-testid="shopping-cart-product-name">{product.title}</span>
            <img src={ product.thumbnail } alt={ product.title } />
            {product.price}
            <span data-testid="shopping-cart-product-quantity">1</span>
          </div>
        )) : (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>) }
      </div>
    );
  }
}

export default Cart;
