import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listagem from './components/Listagem';
import Cart from './components/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
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

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Listagem addCart={ this.addCart } />
        </Route>
        <Route exact path="/cart">
          <Cart cart={ cart } />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
