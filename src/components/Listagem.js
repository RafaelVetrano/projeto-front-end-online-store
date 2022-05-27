import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
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
    this.handleCategoria = this.handleCategoria.bind(this);
    // this.addCart = this.addCart.bind(this);
  }

  handleCategoria = async ({ target }) => {
    const { id, name } = target;
    const produtos = await getProductsFromCategoryAndQuery(id, name);
    this.setState({ produto: produtos.results });
  }

  handleBusca = async () => {
    const { buscar } = this.state;
    const produtos = await getProductsFromCategoryAndQuery(buscar);
    this.setState({ produto: produtos.results });
  }

  // addCart = ({ target }) => {
  //   const { id } = target;
  //   this.setState((prev) => ({
  //     cart: [...prev.cart, id],
  //   }));
  // }

  componentDidMount = async () => {
    const response = await getCategories();
    this.setState({ categorias: response });
  }

  render() {
    const { categorias, produto } = this.state;
    const { addCart, productDetails } = this.props;
    return (
      <>
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
            <input
              type="radio"
              data-testid="category"
              id={ id }
              name="category"
              onClick={ this.handleCategoria }
              value={ name }
            />
            <label htmlFor={ id }>{ name }</label>
          </div>))}

        {!produto ? (
          <BuascaVazio />
        ) : (
          produto.map(({ thumbnail, title, price, id }) => (
            <div data-testid="product" key={ id }>
              <p>{ title }</p>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
              <button
                data-testid="product-add-to-cart"
                key={ uuidv4() }
                type="button"
                onClick={ addCart }
                title={ title }
              >
                Add
              </button>
              <Link
                to="/produto"
                data-testid="product-detail-link"
                onClick={ productDetails }
                name={ title }
              >
                detalhes
              </Link>
            </div>
          ))
        )}
      </>
    );
  }
}

Listagem.propTypes = {
  addCart: PropTypes.func.isRequired,
  productDetails: PropTypes.func.isRequired,
};

export default Listagem;
