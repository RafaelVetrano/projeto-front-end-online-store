import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listagem from './components/Listagem';
import Cart from './components/Cart';
import Produto from './components/Produto';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      produto: '',
    };
  }

  addCart = ({ target }) => {
    const { id } = target;
    const obj = {
      product: id,
      quantity: 1,
    };
    this.setState((prev) => ({
      cart: [...prev.cart, obj],
    }));
  }

  productDetails = ({ target }) => {
    const productName = target.name;
    this.setState({
      produto: productName,
    });
  }

  render() {
    const { cart, produto } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Listagem addCart={ this.addCart } productDetails={ this.productDetails } />
        </Route>
        <Route exact path="/cart">
          <Cart cart={ cart } />
        </Route>
        <Route exact path="/produto">
          <Produto produto={ produto } />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
