import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                {/* banner */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    {/* Indicators*/}
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item item1 active">
                            <div className="container">
                                <div className="space-banner">
                                    <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                                        <p>Get flat
                      <span>10%</span> Cashback</p>
                                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">The
                      <span>Big</span>
                      Sale
                    </h3>
                                        <a className="button2" href="product.html">Shop Now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item2">
                            <div className="container">
                                <div className="space-banner">
                                    <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                                        <p>advanced
                      <span>Wireless</span> earbuds</p>
                                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Best
                      <span>Headphone</span>
                                        </h3>
                                        <a className="button2" href="product.html">Shop Now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item3">
                            <div className="container">
                                <div className="space-banner">
                                    <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                                        <p>Get flat
                      <span>10%</span> Cashback</p>
                                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">New
                      <span>Standard</span>
                                        </h3>
                                        <a className="button2" href="product.html">Shop Now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item item4">
                            <div className="container">
                                <div className="space-banner">
                                    <div className="carousel-caption p-lg-5 p-sm-4 p-3">
                                        <p>Get Now
                      <span>40%</span> Discount</p>
                                        <h3 className="font-weight-bold pt-2 pb-lg-5 pb-4">Today
                      <span>Discount</span>
                                        </h3>
                                        <a className="button2" href="product.html">Shop Now </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                {/* end of banner */}
                {/* top Products */}
                <div className="ads-grid py-sm-5 py-4">
                    <div className="container py-xl-4 py-lg-2">
                        {/* tittle heading */}
                        <h3 className="tittle text-center mb-lg-5 mb-sm-4 mb-3">
                            <span>O</span>ur
              <span>N</span>ew
              <span>P</span>roducts</h3>
                        {/* end of tittle heading */}
                        <div className="row">
                            {/* product left */}
                            <div className="agileinfo-ads-display col-lg-9">
                                <div className="wrapper">
                                    {/* first section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <h3 className="heading-tittle text-center font-italic">New Brand Mobiles</h3>
                                        <div className="row">
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m1.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Samsung Galaxy J7</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$200.00</span>
                                                            <del>$280.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Samsung Galaxy J7" />
                                                                    <input type="hidden" name="amount" Value={200.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m2.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">OPPO A37f</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$230.00</span>
                                                            <del>$250.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="OPPO A37f" />
                                                                    <input type="hidden" name="amount" Value={230.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m3.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Apple iPhone X</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$280.00</span>
                                                            <del>$300.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Apple iPhone X" />
                                                                    <input type="hidden" name="amount" Value={280.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of first section */}
                                    {/* second section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                                        <h3 className="heading-tittle text-center font-italic">Tv &amp; Audio</h3>
                                        <div className="row">
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m4.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Sony 80 cm (32 inches)</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$320.00</span>
                                                            <del>$340.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Sony 80 cm (32 inches)" />
                                                                    <input type="hidden" name="amount" Value={320.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m5.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                        <span className="product-new-top">New</span>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Artis Speaker</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$349.00</span>
                                                            <del>$399.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Artis Speaker" />
                                                                    <input type="hidden" name="amount" Value={349.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m6.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Philips Speakers</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$249.00</span>
                                                            <del>$300.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Philips Speakers" />
                                                                    <input type="hidden" name="amount" Value={249.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of second section */}
                                    {/* third section */}
                                    <div className="product-sec1 product-sec2 px-sm-5 px-3">
                                        <div className="row">
                                            <h3 className="col-md-4 effect-bg">Summer Carnival</h3>
                                            <p className="nut-middle">Get Extra 10% Off</p>
                                            <div className="col-md-8 bg-right-nut">
                                                <img src="images/image1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of third section */}
                                    {/* fourth section */}
                                    <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mt-4">
                                        <h3 className="heading-tittle text-center font-italic">Large Appliances</h3>
                                        <div className="row">
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m7.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span className="product-new-top">New</span>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Whirlpool 245</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$230.00</span>
                                                            <del>$280.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Whirlpool 245" />
                                                                    <input type="hidden" name="amount" Value={230.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m8.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">BPL Washing Machine</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$180.00</span>
                                                            <del>$200.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="BPL Washing Machine" />
                                                                    <input type="hidden" name="amount" Value={180.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 product-men mt-5">
                                                <div className="men-pro-item simpleCart_shelfItem">
                                                    <div className="men-thumb-item text-center">
                                                        <img src="images/m9.jpg" alt="" />
                                                        <div className="men-cart-pro">
                                                            <div className="inner-men-cart-pro">
                                                            <Link  to="/Infoproduct" className="link-product-add-cart">Quick View</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item-info-product text-center border-top mt-4">
                                                        <h4 className="pt-1">
                                                        <Link  to="/Infoproduct">Microwave Oven</Link>
                                                        </h4>
                                                        <div className="info-product-price my-2">
                                                            <span className="item_price">$199.00</span>
                                                            <del>$299.00</del>
                                                        </div>
                                                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                            {/* <form action="#" method="post"> */}
                                                                <fieldset>
                                                                    <input type="hidden" name="cmd" Value="_cart" />
                                                                    <input type="hidden" name="add" Value={1} />
                                                                    <input type="hidden" name="business" Value=" " />
                                                                    <input type="hidden" name="item_name" Value="Microwave Oven" />
                                                                    <input type="hidden" name="amount" Value={199.00} />
                                                                    <input type="hidden" name="discount_amount" Value={1.00} />
                                                                    <input type="hidden" name="currency_code" Value="USD" />
                                                                    <input type="hidden" name="return" Value=" " />
                                                                    <input type="hidden" name="cancel_return" Value=" " />
                                                                    <input type="submit" name="submit" Value="Add to cart" className="button btn" />
                                                                </fieldset>
                                                            {/* </form> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of fourth section */}
                                </div>
                            </div>
                            {/* end of product left */}
                            {/* product right */}
                            <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
                                <div className="side-bar p-sm-4 p-3">
                                    <div className="search-hotel border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Search Here..</h3>
                                        <form action="" method="">
                                            <input type="search" placeholder="Product name..." name="search" required />
                                            <input type="submit" Value=" " />
                                        </form>
                                    </div>
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
                                    {/* end of price */}
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
                                    {/* end of discounts */}
                                    {/* reviews */}
                                    <div className="customer-rev border-bottom left-side py-2">
                                        <h3 className="agileits-sear-head mb-3">Customer Review</h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>5.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>4.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half" />
                                                    <span>3.5</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>3.0</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half" />
                                                    <span>2.5</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end of reviews */}
                                    {/* electronics */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Electronics</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Accessories</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Cameras &amp; Photography</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Car &amp; Vehicle Electronics</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Computers &amp; Accessories</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">GPS &amp; Accessories</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Headphones</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Home Audio</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Home Theater, TV &amp; Video</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Mobiles &amp; Accessories</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Portable Media Players</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Tablets</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Telephones &amp; Accessories</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Wearable Technology</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end of electronics */}
                                    {/* delivery */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Eligible for Cash On Delivery</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end of delivery */}
                                    {/* arrivals */}
                                    <div className="left-side border-bottom py-2">
                                        <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
                                        <ul>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Last 30 days</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" className="checked" />
                                                <span className="span">Last 90 days</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* end of arrivals */}
                                    {/* best seller */}
                                    <div className="f-grid py-2">
                                        <h3 className="agileits-sear-head mb-3">Best Seller</h3>
                                        <div className="box-scroll">
                                            <div className="scroll">
                                                <div className="row">
                                                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                                        <img src="images/k1.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                                        <a href>Samsung Galaxy On7 Prime (Gold, 4GB RAM + 64GB Memory)</a>
                                                        <a href className="price-mar mt-2">$12,990.00</a>
                                                    </div>
                                                </div>
                                                <div className="row my-4">
                                                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                                        <img src="images/k2.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                                        <a href>Haier 195 L 4 Star Direct-Cool Single Door Refrigerator</a>
                                                        <a href className="price-mar mt-2">$12,499.00</a>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-sm-2 col-3 left-mar">
                                                        <img src="images/k3.jpg" alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="col-lg-9 col-sm-10 col-9 w3_mvd">
                                                        <a href>Ambrane 13000 mAh Power Bank (P-1310 Premium)</a>
                                                        <a href className="price-mar mt-2">$1,199.00 </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of best seller */}
                                </div>
                                {/* end of product right */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;