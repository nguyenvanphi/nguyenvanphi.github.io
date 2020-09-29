import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="agile-main-top">
                    <div className="container-fluid">
                        <div className="row main-top py-2">
                            <div className="col-lg-4 header-most-top">
                                <p className="text-white text-lg-left text-center">Offer Zone Top Deals &amp; Discounts
                  <i className="fas fa-shopping-cart ml-1" />
                                </p>
                            </div>
                            <div className="col-lg-8 header-right mt-lg-0 mt-2">
                                {/* header lists */}
                                <ul>
                                    <li className="text-center border-right text-white">
                                        <a className="play-icon popup-with-zoom-anim text-white" href="#small-dialog1">
                                            <i className="fas fa-map-marker mr-2" />Select Location</a>
                                    </li>
                                    <li className="text-center border-right text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                            <i className="fas fa-truck mr-2" />Track Order</a>
                                    </li>
                                    <li className="text-center border-right text-white">
                                        <i className="fas fa-phone mr-2" /> 001 234 5678
                  </li>
                                    <li className="text-center border-right text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="text-white">
                                            <i className="fas fa-sign-in-alt mr-2" /> Log In </a>
                                    </li>
                                    <li className="text-center text-white">
                                        <a href="#" data-toggle="modal" data-target="#exampleModal2" className="text-white">
                                            <i className="fas fa-sign-out-alt mr-2" />Register </a>
                                    </li>
                                </ul>
                                {/* end of header lists */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button trigger modal*/}
                {/* modals */}
                {/* log in */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center">Log In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label className="col-form-label">Username</label>
                                        <input type="text" className="form-control" placeholder=" " name="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input type="password" className="form-control" placeholder=" " name="Password" required />
                                    </div>
                                    <div className="right">
                                        <input type="submit" className="form-control" Value="Log in" />
                                    </div>
                                    <div className="sub">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                            <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me?</label>
                                        </div>
                                    </div>
                                    <p className="text-center dont-do mt-3">Don't have an account?
                    <a href="#" data-toggle="modal" data-target="#exampleModal2">
                                            Register Now</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* register */}
                <div className="modal fade" id="exampleModal2" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="post">
                                    <div className="form-group">
                                        <label className="col-form-label">Your Name</label>
                                        <input type="text" className="form-control" placeholder=" " name="Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Email</label>
                                        <input type="email" className="form-control" placeholder=" " name="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Password</label>
                                        <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Confirm Password</label>
                                        <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required />
                                    </div>
                                    <div className="right">
                                        <input type="submit" className="form-control" Value="Register" />
                                    </div>
                                    <div className="sub">
                                        <div className="custom-control custom-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" />
                                            <label className="custom-control-label" htmlFor="customControlAutosizing2">I Accept to the Terms &amp; Conditions</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of modal */}
                {/* end of top-header */}
                {/* header-bottom*/}
                <div className="header-bot">
                    <div className="container">
                        <div className="row header-bot_inner_wthreeinfo_header_mid">
                            {/* logo */}
                            <div className="col-md-3 logo_agile">
                                <h1 className="text-center">
                                    <Link to="/" className="font-weight-bold font-italic">
                                        Electro Store
                                    </Link>
                                </h1>
                            </div>
                            {/* end of logo */}
                            {/* header-bot */}
                            <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                                <div className="row">
                                    {/* search */}
                                    <div className="col-10 agileits_search">
                                        <form className="form-inline" action="" method="">
                                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                            <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                        </form>
                                    </div>
                                    {/* end of search */}
                                    {/* cart details */}
                                    <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                        <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                            <form action="#" method="post" className="last">
                                                <input type="hidden" name="cmd" Value="_cart" />
                                                <input type="hidden" name="display" Value={1} />
                                                <Link to="/Cart"><button className="btn w3view-cart" type="submit" name="submit" value>
                                                    <i className="fas fa-cart-arrow-down" />
                                                </button></Link>
                                            </form>
                                        </div>
                                    </div>
                                    {/* end of cart details */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* shop locator (popup) */}
                {/* end of header-bottom */}
                {/* navigation */}
                <div className="navbar-inner">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="agileits-navi_search">
                                <form action="#" method="post">
                                    <select id="agileinfo-nav_search" name="agileinfo_search" className="border" required>
                                        <option value>All Categories</option>
                                        <option value="Televisions">Televisions</option>
                                        <option value="Headphones">Headphones</option>
                                        <option value="Computers">Computers</option>
                                        <option value="Appliances">Appliances</option>
                                        <option value="Mobiles">Mobiles</option>
                                        <option value="Fruits & Vegetables">Tv &amp; Video</option>
                                        <option value="iPad & Tablets">iPad &amp; Tablets</option>
                                        <option value="Cameras & Camcorders">Cameras &amp; Camcorders</option>
                                        <option value="Home Audio & Theater">Home Audio &amp; Theater</option>
                                    </select>
                                </form>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto text-center mr-xl-5">
                                    <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                                        <Link className="nav-link" to="/">Home
                      <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Electronics
                    </a>
                                        <div className="dropdown-menu">
                                            <div className="agile_inner_drop_nav_info p-4">
                                                <h5 className="mb-3">Mobiles, Computers</h5>
                                                <div className="row">
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <Link to="/Products" >All Mobile Phones</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >All Mobile Accessories</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Cases &amp; Covers</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Screen Protectors</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Power Banks</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >All Certified Refurbished</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Tablets</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Wearable Devices</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Smart Home</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                            <Link to="/Products" >Laptops</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Drives &amp; Storage</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Printers &amp; Ink</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Networking Devices</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Computer Accessories</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Game Zone</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Software</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Appliances
                    </a>
                                        <div className="dropdown-menu">
                                            <div className="agile_inner_drop_nav_info p-4">
                                                <h5 className="mb-3">TV, Appliances, Electronics</h5>
                                                <div className="row">
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                            <Link to="/Products" >Televisions</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Home Entertainment Systems</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Headphones</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Speakers</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >MP3, Media Players &amp; Accessories</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Audio &amp; Video Accessories</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Cameras</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                            <Link to="/Products" >Musical Instruments</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Gaming Consoles</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >All Electronics</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Air Conditioners</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Refrigerators</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >Washing Machines</Link>
                                                            </li>
                                                            <li>
                                                            <Link to="/Products" >All Appliances</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                                        <a className="nav-link" href="#footer">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#footer">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;