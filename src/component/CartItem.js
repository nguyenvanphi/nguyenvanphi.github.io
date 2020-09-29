import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartItem extends Component {
    render() {
        var { item } = this.props;
        var { quantity } = item;
        return (
            <tr>
                <td scope="row">
                    <img src={item.product.image} class="img-responsive" alt="Image" width="100px" />
                </td>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                                                onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}>
                            <a>—</a>
                        </label>
                        <label onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button onClick={() => this.onDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title data-original-title="Remove item">
                        X
                                                </button>
                </td>
            </tr>
        );
    }

    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart } = this.props;
            onUpdateProductInCart(product, quantity);
        }
    }

    onDelete = (product) => {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;