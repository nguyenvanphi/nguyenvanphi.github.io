import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        var {product} = this.props
        return (
            <div className="col-md-4 product-men pt-5 pb-5">
                <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item text-center">
                        <img src={product.image} alt="" className="img-fluid"/>
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                            </div>
                        </div>
                    </div>
                    <div className="item-info-product text-center border-top mt-4">
                        <h4 className="pt-1">
                            <Link  to="/Infoproduct">{product.name}</Link>
                        </h4>
                        <div className="info-product-price my-2">
                            <span className="item_price">${product.price}</span>
                        </div>
                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="" method="">
                                <fieldset>
                                    <input type="hidden" name="cmd" Value="_cart" />
                                    <input type="hidden" name="add" Value={1} />
                                    <input type="hidden" name="business" Value=" " />
                                    <input type="hidden" name="item_name" Value={product.name} />
                                    <input type="hidden" name="amount" Value={product.price} />
                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                    <input type="hidden" name="currency_code" Value="USD" />
                                    <input type="hidden" name="return" Value=" " />
                                    <input type="hidden" name="cancel_return" Value=" " />
                                    <input type="button" name="submit" Value="Add to cart" className="button btn" onClick={ () => this.onAddToCart(product) }/>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
    }
}

export default Product;