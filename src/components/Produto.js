import React from 'react';
import PropTypes from 'prop-types';

class Produto extends React.Component {
  render() {
    const { produto } = this.props;
    return <p data-testid="product-detail-name">{ produto }</p>;
  }
}

Produto.propTypes = {
  produto: PropTypes.string.isRequired,
};

export default Produto;
