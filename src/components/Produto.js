import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produto extends React.Component {
  render() {
    const { produto, addCart } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{ produto }</p>
        <button
          onClick={ addCart }
          data-testid="product-detail-add-to-cart"
          type="button"
          title={ produto }
        >
          btn
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          carrinho
        </Link>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Produto;
