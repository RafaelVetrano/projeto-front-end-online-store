import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import BuascaVazio from './BuscaVazio';

class Listagem extends React.Component {
  constructor() {
    super();

    this.state = {
      buscar: '',
      produto: [],
    };
  }

  handleBusca = async () => {
    const { buscar } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(buscar);
    this.setState({ produto: produtos.results });
  };

  render() {
    const { produto } = this.state;
    return (
      <>
        <input
          data-testid="query-input"
          type="text"
          placeholder="busca"
          onChange={ ({ target }) => {
            this.setState({ buscar: target.value });
          } }
        />

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleBusca }
        >
          Pesquisar
        </button>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        {!produto ? (
          <BuascaVazio />
        ) : (
          produto.map(({ thumbnail, title, price, id }) => (
            <div data-testid="product" key={ id }>
              <p>{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          ))
        )}
      </>
    );
  }
}

export default Listagem;
