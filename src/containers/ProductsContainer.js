import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Products from './../component/Products';
import Product from './../component/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index'; 

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }

    showProducts(products){
        var result = null;
        var { onAddToCart } = this.props;
        if(products.length > 0){
            result = products.map((product, index)=>{
                return <Product 
                            key={index} 
                            product={product} 
                            onAddToCart = {onAddToCart}
                        />
            });
        }
        return result;
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            image1 : PropTypes.string.isRequired,
            image2 : PropTypes.string.isRequired,
            information1 : PropTypes.string.isRequired,
            information2 : PropTypes.string.isRequired,
            information3 : PropTypes.string.isRequired,
            information4 : PropTypes.string.isRequired,
            information5 : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products 
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);