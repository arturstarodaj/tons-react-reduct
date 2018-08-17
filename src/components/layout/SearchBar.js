import React, { Component } from 'react'
import { getProductsByName } from '../../actions/productActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Predictions from './Predictions';
import { Link } from 'react-router-dom';

class SearchBar extends Component {

    state = {
        query: '',
    }

    handleInputChange = () => {
    this.setState({
        query: this.search.value
    });
    this.props.getProductsByName(this.search.value)
    }
    render() {
        return (
            <div className="flex-nav-fill">
                <form acceptCharset="utf-8" className="nav-searchbar" method="GET" name="site-search" role="search">
                    <div className="nav-left">                        
                        <span>Books</span>                        
                    </div>
                    <div className="nav-right">
                        <div className="nav-search-submit nav-sprite">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="nav-fill">
                        <div className="nav-search-field ">
                            <input type="text" 
                                ref={input => this.search = input} 
                                onChange={this.handleInputChange} 
                                placeholder="Enter a book name..." 
                                id="searchbar" 
                                name="field-keywords" 
                                autoComplete="off" 
                                placeholder="" 
                                className="nav-input"
                                tabIndex="1" />                                
                        </div>
                       
                    </div>
                </form>
                <Predictions></Predictions>
            </div>
        )
    }
}

SearchBar.propTypes = {
	getProductsByName: PropTypes.func.isRequired,
  };
  
const mapStateToProps = state => ({
    predictives: state.product.predictives
});

export default connect(
mapStateToProps,
{ getProductsByName }
)(SearchBar);
            
