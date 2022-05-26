import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import BuascaVazio from './BuscaVazio';

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div data-testid="shopping-cart-product-name">
        { cart.length > 0
          ? cart.map(({ product, quantity }) => (
            <div datatest-id="shopping-cart-product-name" key={ uuidv4() }>
              { product }
              <div data-testid="shopping-cart-product-quantity">{ quantity }</div>
            </div>
          ))
          : <BuascaVazio />}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
  })).isRequired,
};

export default Cart;
