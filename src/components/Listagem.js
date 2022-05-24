import React from 'react';
import {getProductsFromCategoryAndQuery} from '../services/api'
import BuascaVazio from './BuscaVazio';

class Listagem extends React.Component {
  constructor() {
    super();

    this.state = {
      buscar: '',
      click: false,
    }
  }

  handleBusca = async () => {
    const { buscar } = this.state;
    await getProductsFromCategoryAndQuery(buscar)
    this.setState({click: true})
  }

  render() {
    const { buscar, click } = this.state;
    return (
      <>
        <input
        data-testid="query-input"
        type="text"
        placeholder="busca"
        onChange={ (({target}) => {
          this.setState({ buscar: target.value })
        }) } />

        <button
        data-testid="query-button"
        type="button"
        onClick={ this.handleBusca }>
        Pesquisar
        {buscar.map(({title, thumbnail, price, id}) => {
          <div key={ id }>
            <p>{title}</p>
            <img src={thumbnail} alt={ title }/>
            <p>{price}</p>
          </div>
        })}
        
        </button>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { click && (
          <BuascaVazio />
        ) }

      </>
    );
  }
}

export default Listagem;
