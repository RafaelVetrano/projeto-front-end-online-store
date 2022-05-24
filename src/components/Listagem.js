import React from 'react';
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

        { categorias.map(({ name, id }) => (
          <div key={ id }>
            <input type="radio" data-testid="category" />
            <label htmlFor="category">{name}</label>
          </div>))}
      </>
    );
  }
}

export default Listagem;
