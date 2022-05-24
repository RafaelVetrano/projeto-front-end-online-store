import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listagem from './components/Listagem';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/">
          <Listagem />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
