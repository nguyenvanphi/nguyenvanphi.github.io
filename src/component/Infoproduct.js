import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Infoproduct extends Component {
    render() {
        return (
            <div>
                <div className="page-head_agile_info" />
                {/* page */}
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                <Link  to="/">Home</Link>
                                    <i>/</i>
                                </li>
                                <li>Samsung</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end of page */}
                {/* end of banner */}
                {/* info products */}
                <div className="banner-bootom-w3-agileits py-5">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="col-lg-5 col-md-8 text-center">Samsung Galaxy J7 Prime </h3>
                        {/* end of tittle heading*/}
                        <div className="row">
                            <div className="col-lg-5 col-md-8 single-right-left">
                                <div className="grid images_3_of_2">
                                    <div className="flexslider">
                                        <ul className="slides">
                                            <li data-thumb="images/si1.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si1.jpg" data-imagezoom="true" className="img-fluid" alt="" />
                                                </div>
                                            </li>
                                            <li data-thumb="images/si2.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si2.jpg" data-imagezoom="true" className="img-fluid" alt="" />
                                                </div>
                                            </li>
                                            <li data-thumb="images/si3.jpg">
                                                <div className="thumb-image">
                                                    <img src="images/si3.jpg" data-imagezoom="true" className="img-fluid" alt="" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
                                <p className="mb-3">
                                    <span className="item_price">$200.00</span>
                                    <del className="mx-2 font-weight-light">$280.00</del>
                                    <label>Free delivery</label>
                                </p>
                                <div className="single-infoagile">
                                    <ul>
                                        <li className="mb-3">
                                            Cash on Delivery Eligible.
                    </li>
                                        <li className="mb-3">
                                            Shipping Speed to Delivery.
                    </li>
                                        
                                        <li className="mb-3">
                                            Bank OfferExtra 5% off* 
                    </li>
                                    </ul>
                                </div>
                                <div className="product-single">
                                    <p className="my-3">
                                        <i className="far fa-hand-point-right mr-2" />
                                        <label>1 Year</label>Manufacturer Warranty</p>
                                    <ul>
                                        <li className="mb-1">
                                            3 GB RAM | 16 GB ROM | Expandable Upto 256 GB
                    </li>
                                        <li className="mb-1">
                                            5.5 inch Full HD Display
                    </li>
                                        <li className="mb-1">
                                            13MP Rear Camera | 8MP Front Camera
                    </li>
                                        <li className="mb-1">
                                            3300 mAh Battery
                    </li>
                                        <li className="mb-1">
                                            Exynos 7870 Octa Core 1.6GHz Processor
                    </li>
                                    </ul>
                                    <p className="my-sm-4 my-3">
                                        <i className="fas fa-retweet mr-3" />Net banking &amp; Credit/ Debit/ ATM card
                  </p>
                                </div>
                                <div className="occasion-cart">
                                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                        {/* <form action="" method=""> */}
                                            <input type="submit" name="submit" Value="Add to cart" className="button" />
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of info products */}
            </div>
        );
    }
}

export default Infoproduct;