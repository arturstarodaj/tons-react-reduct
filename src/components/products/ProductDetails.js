import React, { Component } from 'react'
import { getProductById } from '../../actions/productActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ProductDetails extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getProductById(id);
	}

	componentWillReceiveProps(newProps) {
		const { id } = newProps.match.params;
		this.props.getProductById(id);
	}

  render() {
	const { productDetail, name, publisher } = this.props;
	return (
		<React.Fragment>
			<h2 className="pahe-header mb-4 mt-4"> { productDetail.name } <span className="publisher">{ productDetail.publisher }</span></h2>
			
			<div className="product-detail">
				<div className="image-wrapper-large" 
				style={{ backgroundImage: `url("https://mediamodifier.com/images/blog/3d-online-free-book-cover-mockup-generator-templates-2.png")` }}>
				</div>

				<div className="product-detail-desc">
					<div className="card">
						<ul className="list-group list-group-flush">
							{ productDetail.name ? <li className="list-group-item"><strong>Title: </strong> { productDetail.name } </li> : null }
							{ productDetail.publisher ? <li className="list-group-item"><strong>Publisher: </strong>{ productDetail.publisher } </li> : null }
							{ productDetail.author ? <li className="list-group-item"><strong>Author: </strong>{ productDetail.author } </li> : null }
							{ productDetail.pages ? <li className="list-group-item"><strong>Pages: </strong>{ productDetail.pages } </li> : null }
							{ productDetail.format ? <li className="list-group-item"><strong>Format: </strong>{ productDetail.format } </li> : null }
						</ul>
					</div>
					<div className="button">
						Add to Cart
					<div></div>
					<i className="fa fa-shopping-cart"></i>
					</div>
				</div>	
			</div>
		</React.Fragment>
	)
  }
}

ProductDetails.propTypes = {
	getProductById: PropTypes.func.isRequired,
	product: PropTypes.any
  };
  
const mapStateToProps = state => ({
	productDetail: state.product.product,
});

export default connect(
mapStateToProps,
{ getProductById }
)(ProductDetails);
