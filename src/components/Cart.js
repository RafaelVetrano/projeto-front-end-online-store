import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import BuascaVazio from './BuscaVazio';

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div data-testid="shopping-cart-product-name">
        { cart.length > 0 ? (
          cart.map(({ product, quantity }) => (
            <div key={ uuidv4() }>
              <div data-testid="shopping-cart-product-name" key={ uuidv4() }>
                {product}
              </div>
              <h3 data-testid="shopping-cart-product-quantity" key={ uuidv4() }>
                {quantity}
              </h3>
            </div>
          ))
        ) : (
          <BuascaVazio />
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ).isRequired,
};

export default Cart;
