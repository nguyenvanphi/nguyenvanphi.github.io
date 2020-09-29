import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        var {children} = this.props;
        return (
            <div>
                <div className="page-head_agile_info" />
                {/* page */}
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                <Link  to="/Infoproduct">Home</Link>
                                    <i>/</i>
                                </li>
                                <li>Shopping cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="tittle text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>S</span>hopping
                            <span>C</span>art</h3>
                        {/* end of tittle heading */}
                        <div className="section">
                            <div className="table-responsive">
                                <table className="table product-table">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Item</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Provisional</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {children}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;