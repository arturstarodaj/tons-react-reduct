import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { destroyPredictions } from './../../actions/productActions';

class Predictions extends Component {
  
  onPredClick(){
    this.props.destroyPredictions();
  };
  render() {
    const { predictions } = this.props;
    predictions.length = predictions.length > 10 ? 10 : predictions.length;
    return (
      predictions ? <ul className="predictions list-group list-group-flush">
          {predictions.map(p => (
            <li key={p.gtin14} onClick={ this.onPredClick.bind(this)} className="list-group-item"><Link to={`/product/${p.gtin14}`}>{ p.name }</Link></li>
          ))}
      </ul> : null
    )
  }
}
Predictions.propTypes = {
    predictions: PropTypes.array,
    destroyPredictions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  predictions: state.product.predictions
});

export default connect(
mapStateToProps,
{destroyPredictions},
)(Predictions);