import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listagem from './components/Listagem';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Listagem />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
