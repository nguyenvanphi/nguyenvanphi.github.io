import React, { Component } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

class Products extends Component {
    render() {
        return (
            <div>
                {/* banner */}
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
                                <li>Electronics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end of page */}
                {/* end of banner */}
                {/* top Products */}
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="tittle text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>M</span>obiles
                            <span>&amp;</span>
                            <span>C</span>omputers</h3>
                        {/* end of tittle heading */}
                        <div className="row">
                            {/* product left */}
                            <div className="agileinfo-ads-display col-lg-9">
                                <div className="wrapper">
                                    {/* first section */}
                                    <div className="product-sec1 px-sm-4 px-3   py-3 mb-4">
                                    {/* py-sm-5 */}
                                        <div className="row">
                                            { this.props.children }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end of product left */}
                            {/* product right */}
                            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                                <div className="side-bar p-sm-4 p-3">
                                    <div className="search-hotel border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Brand</h3>
                                        <form action="" method="">
                                            <input type="search" placeholder="Search Brand..." name="search" required />
                                            <input type="submit" Value=" " />
                                        </form>
                                        <div className="left-side py-2">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Samsung</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Red Mi</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Apple</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Nexus</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Motorola</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Micromax</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Lenovo</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Oppo</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">Sony</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">LG</span>
                                                </li>
                                                <li>
                                                    <input type="checkbox" className="checked" />
                                                    <span className="span">One Plus</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* ram */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Ram</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Less than 512 MB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">512 MB - 1 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">1 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">2 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">3 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">5 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">6 GB</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">6 GB &amp; Above</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //ram */}
                                    {/* price */}
                                    <div className="range border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Price</h3>
                                        <div className="range">
                                            <ul>
                                                <li>
                                                    <a href="#">Under $1,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="#">$1,000 - $5,000</a>
                                                </li>
                                                <li>
                                                    <a href="#">$5,000 - $10,000</a>
                                                </li>
                                                <li className="my-1">
                                                    <a href="#">$10,000 - $20,000</a>
                                                </li>
                                                <li>
                                                    <a href="#">$20,000 $30,000</a>
                                                </li>
                                                <li className="mt-1">
                                                    <a href="#">Over $30,000</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* //price */}
                                    {/* discounts */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Discount</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">5% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">10% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">20% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">30% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">50% or More</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">60% or More</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* //discounts */}
                                </div>
                                {/* //product right */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Products;