import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProductById } from '../../actions/productActions';

class ProductOverview extends Component {
  state = {
    showProductInfo: false
  };

  render() {
    const { gtin14, name, publisher} = this.props.product;
    const { showProductInfo } = this.state;

    return (
        <Link to={`product/${gtin14}`} className="product-overview-box ">
          <div className="image-wrapper hover-zoom" 
          style={{ backgroundImage: `url("https://mediamodifier.com/images/blog/3d-online-free-book-cover-mockup-generator-templates-2.png")` }}>
          </div>
          <h5>
            {name}
          </h5>
          <small>{ publisher}</small>
          
        </Link>
    );
  }
}

ProductOverview.propTypes = {
  product: PropTypes.object.isRequired
};

export default connect(
  null,
  { getProductById }
)(ProductOverview);
