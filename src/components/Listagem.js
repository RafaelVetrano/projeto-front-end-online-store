import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Listagem extends React.Component {
state = {
  categorias: [],
}

  componentDidMount = async () => {
    const response = await getCategories();
    this.setState({ categorias: response });
  }

  render() {
    const { categorias } = this.state;

    return (
      <>
        <input type="text" placeholder="busca" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">
            0
          </span>
        </Link>

        { categorias.map(({ name, id }) => (
          <div key={ id }>
            <input type="radio" data-testid="category" id={ id } name="category" />
            <label htmlFor={ id }>{name}</label>
          </div>))}
      </>
    );
  }
}

export default Listagem;
