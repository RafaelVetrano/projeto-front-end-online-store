import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import BuascaVazio from './BuscaVazio';

class Listagem extends React.Component {
  constructor() {
    super();

    this.state = {
      buscar: '',
      produto: [],
      categorias: [],
    };
    this.handleBusca = this.handleBusca.bind(this);
  }

  componentDidMount = async () => {
    const response = await getCategories();
    this.setState({ categorias: response });
  }

  handleBusca = async () => {
    const { buscar } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(buscar);
    this.setState({ produto: produtos.results });
  }

  render() {
    const { categorias, produto } = this.state;

    return (
      <>
        <input type="text" placeholder="busca" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          data-testid="query-input"
          type="text"
          placeholder="busca"
          onChange={ ({ target }) => {
            this.setState({ buscar: target.value });
          } }
        />
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <span data-testid="shopping-cart-size">
            0
          </span>
        </Link>

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleBusca }
        >
          Pesquisar
        </button>

        { categorias.map(({ name, id }) => (
          <div key={ id }>
            <input type="radio" data-testid="category" id={ id } name="category" />
            <label htmlFor={ id }>{name}</label>
          </div>))}
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
