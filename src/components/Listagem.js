import React from 'react';
import { Link } from 'react-router-dom';

class Listagem extends React.Component {
  render() {
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
      </>
    );
  }
}

export default Listagem;
