import React, { Component } from 'react';
import { getCategories, getProductByName } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: {},
      searchProducts: '',
    };
  }

  async componentDidMount() {
    const responseCategories = await getCategories();
    this.setState({
      categories: responseCategories,
    });
  }

   controlInputProducts = ({ target:{value }}) => {
    const { searchProducts } = this.state;
    this.setState({ searchProducts: value})
  }

  requireProducts = async () => {
    const { searchProducts } = this.state;
    const dataApi = await getProductByName(searchProducts);
    this.setState({ products: dataApi })
  }

  render() {
    const { categories, products: { results } } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label>
          <input type="text" data-testid="query-input" onChange={this.controlInputProducts} name="searchProducts" />
          <input type="button" data-testid="query-button" onClick={this.requireProducts}/>
        </label>
        <div>
          <div>
            {categories.map((categorie) => (
              <label
                key={ categorie.id }
                htmlFor={ categorie.name }
                data-testid="category"
              >
                {categorie.name}
                <input
                  // key={ categorie.id }
                  type="radio"
                  id={ categorie.name }
                  // onClick=""
                  name="categories"
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          { results.length > 0 ? results.map((product) => (
            <div>
              {
                product.name
              }
              <img src={product.image} alt={product.title} />
              </div>
          ) ) }
        </div>
      </div>
    );
  }
}
