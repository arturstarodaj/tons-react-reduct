import React, { Component } from 'react';
import ProductOverview from './ProductOverview';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, searchProductsByName } from '../../actions/productActions';

class ProductsList extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;
    name ? this.props.searchProductsByName(name) :  this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <h2 className="page-header mb-4 mt-4">
          Product List <span className="small">Click product to see details</span>
        </h2>
        <div className="product-boxes">
          {products.map(p => (
            <ProductOverview key={p.gtin14} product={p} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
  searchProductsByName: PropTypes.func.isRequired,
  name: PropTypes.string
};

const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(
  mapStateToProps,
  { getProducts, searchProductsByName }
)(ProductsList);
