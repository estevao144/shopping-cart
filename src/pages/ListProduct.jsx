import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class ListProducts extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const responseCategories = await getCategories();
    this.setState({
      categories: responseCategories,
    });
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
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

          {/* <label htmlFor="categories">
            <input
              type="radio"
              id=""
              onClick=""
              name="categories"
            />
          </label> */}
        </div>
      </div>
    );
  }
}
