import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Layout extends Component {
    static displayName = Layout.name;
    doSomething = e => {
        debugger;
        e.preventDefault();
        var element = document.body;
        element.classNameList.toggle("dark-mode");
    }
    render() {
        return (

            <div id="MainBody">
                <div id="loader" classNameName="center text-center-loader" style={{ display: "none"}}>
                    <img src="https://www.papertax.in/assets/images/spinner.gif" alt="loader"/>
                </div>

                    <div id="preloader">
                        <div id="status">
                            <div className="spinner">
                                <div className="double-bounce1"></div>
                                <div className="double-bounce2"></div>
                            </div>
                        </div>
                    </div>


                    <header id="topnav" className="defaultscroll sticky">
                        <div className="container">
                            <div>
                            <a className="logo" href={"https://www.papertax.in/"}>
                                <img style={{ maxWidth: "100%", height: "75px" }} src="https://www.papertax.in/assets/images/paper_tax_images/paan-legal-logo.svg" alt="papertax logo" />
                                </a>
                            </div>
                                <ul className="buy-button list-inline mb-0">
                                    <li className="list-inline-item mb-0">
                                        <div className="dropdown dropdown-primary">
                                    <button type="button" className="btn btn-primary dropdown-toggle " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-user align-middle icons"></i><i className="uil uil-angle-down align-middle icons"></i></button>
                                    <div className="dropdown-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-3" style={{ width: "200px" }}>
                                                <a className="dropdown-item text-dark" href="https://www.papertax.in/register"><i className="uil uil-user-plus align-middle mr-1"></i>Sign up</a>
                                                <div className="dropdown-divider my-3 border-top"></div>
                                                <a href="https://www.papertax.in/login" className="dropdown-item text-dark"><i className="uil uil-sign-in-alt align-middle mr-1"></i>Login</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-inline-item mb-0 pr-1">
                                        <div className="dropdown">
                                            <button type="button" className="btn  btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="uil uil-shopping-cart align-middle icons"></i></button>
                                    <a id="cartItemCountDiv" href={"https://www.papertax.in/get-cart-details"}></a>
                                    <div className="dropdown-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 p-4" id="dynamicCartData" style={{ width: "300px;" }}>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="menu-extras">
                                    <div className="menu-item">

                                        <a className="navbar-toggle">
                                            <div className="lines">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                                <div id="navigation">

                                    <ul className="navigation-menu">
                                        <li className="home"><a href="https://www.papertax.in/#home" className="h6 text-dark">Home</a></li>
                                        <li className="incomeTax"><a href="https://www.papertax.in/income-tax#incomeTax" className="h6 text-dark">Income Tax</a></li>
                                        <li className="WhyUs"><a href="https://www.papertax.in/gst" className="h6 text-dark">GST</a>
                                        </li>
                                        <li className="has-submenu">
                                            <a href="javascript:void(0)">Explore</a><span className="menu-arrow"></span>
                                            <ul className="submenu">
                                                <li><a href="https://www.papertax.in/app-showcase">App Showcase</a></li>
                                                <li><a href="https://www.papertax.in/paper-tax-wallet">Paper Tax Wallet</a></li>
                                                <li><a href="https://www.papertax.in/faqs">FAQ's</a></li>
                                                <li><a href="https://www.papertax.in/contact-us">Contact us</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="buy-menu-btn d-none">
                                        <a href="https://www.papertax.in/login" className="btn btn-pills btn-soft-light mt-2 mr-2">Login</a>
                                    </div>
                                    <div className="buy-menu-btn d-none">
                                        <a href="https://www.papertax.in/register" className="btn btn-pills btn-danger mt-2 mr-2">Sign up</a>
                                    </div>
                        </div>
                        </div>
                         </header>

                    <Container>
                        {this.props.children}
                        </Container>
            </div>

                   
                );
  }
}
