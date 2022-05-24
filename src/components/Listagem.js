import React from 'react';
import {getCategories} from '../services/api'
import BuascaVazio from './BuscaVazio';

class Listagem extends React.Component {
  constructor() {
    super();

    this.state = {
      buscar: '',
    }
  }

  handleBusca = async () => {
    const { buscar } = this.state;
    await getCategories(buscar)
  }

  render() {
    const { buscar } = this.state;
    return (
      <>
        <input
        data-testid="query-input"
        type="text"
        placeholder="busca"
        onChange={ (({target}) => {
          this.setState({ buscar: target.value })
        }) } />

        <button data-testid="query-button" type="button" onClick={ this.handleBusca }>
        
          Pesquisar</button>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { !buscar && (
          <BuascaVazio />
        ) }

      </>
    );
  }
}

export default Listagem;
