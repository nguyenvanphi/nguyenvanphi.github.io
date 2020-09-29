import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../component/Cart';
import CartItem from './../component/CartItem';
import CartResult from './../component/CartResult';
import { actDeleteProductInCart, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        var result = null;
        if(cart.length > 0){
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item}
                        index = {index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }
    // arow function
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
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
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart : PropTypes.func.isRequired,
    onUpdateProductInCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);