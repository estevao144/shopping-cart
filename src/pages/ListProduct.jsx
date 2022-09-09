import React, { Component } from 'react';
import { getCategories, getProductByName,
  getProductsFromCategoryAndQuery } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: {},
      searchProducts: '',
      selectCategorieID: '',
      selectCategorieName: '',
    };
  }

  async componentDidMount() {
    const responseCategories = await getCategories();
    const dataApi = await getProductsFromCategoryAndQuery(
      null,
      null,
    );
    this.setState({
      categories: responseCategories,
      products: dataApi,
    });
  }

  controlInputProducts = ({ target: { value } }) => {
    this.setState({
      searchProducts: value,
    });
  };

  controlInputCategory = async ({ target: { value, id } }) => {
    const { selectCategorieID, selectCategorieName } = this.state;
    // Com o await o vetor retorna com os produtos, pq? eu não sei!
    await this.setState({
      selectCategorieID: id,
      selectCategorieName: value,
    });
    this.requireCategory(selectCategorieID, selectCategorieName);
  };

  requireProducts = async () => {
    const { searchProducts } = this.state;
    const dataApi = await getProductByName(searchProducts);
    this.setState({ products: dataApi });
  };

  requireCategory = async () => {
    const { selectCategorieID, selectCategorieName } = this.state;
    const dataApi = await getProductsFromCategoryAndQuery(
      selectCategorieID,
      selectCategorieName,
    );
    this.setState({ products: dataApi });
    console.log(dataApi);
  };

  render() {
    const { categories, products: { results } } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <label htmlFor="searchProducts">
          <input
            type="text"
            data-testid="query-input"
            onChange={ this.controlInputProducts }
            name="searchProducts"
          />
          <input
            type="button"
            data-testid="query-button"
            onClick={ this.requireProducts }
          />
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
                  id={ categorie.id }
                  onChange={ this.controlInputCategory }
                  name="categories"
                  value={ categorie.name }
                />
              </label>
            ))}
          </div>
        </div>
        <div>
          { results !== undefined ? results.map(({ id, title, thumbnail, price }) => (
            <div key={ id } data-testid="product">
              {title}
              <img src={ thumbnail } alt={ title } />
              {price}
            </div>
          )) : <span>Nenhum produto foi encontrado</span>}
        </div>
      </div>
    );
  }
}
