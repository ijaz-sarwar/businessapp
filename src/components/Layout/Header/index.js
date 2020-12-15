import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header id="header">
      <div class="container">
        <div class="header-row">
          <div class="header-column justify-content-start">
            {/* <!-- Logo
        ============================= --> */}
            <div class="logo"> <Link class="d-flex" to="/" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></Link> </div>
            {/* <!-- Logo end --> 
        <!-- Collapse Button
        ============================== --> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span></span> <span></span> <span></span> </button>

            {/* <!-- Primary Navigation
        ============================== --> */}
<<<<<<< HEAD
            <nav class="primary-menu navbar navbar-expand-lg">
              <div id="header-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <li><Link to="send-us">Send</Link></li>
                  <li><Link to="recieve">Recieve</Link></li>
                  <li><Link to="about-us">About Us</Link></li>
                  <li><Link to="fees">Fees</Link></li>
                  <li><Link to="help">Help</Link></li>
                  <li class="dropdown"> <a class="dropdown-toggle" href="#">Features</a>
=======
        <nav class="primary-menu navbar navbar-expand-lg">
          <div id="header-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li><Link to="send-us">Send</Link></li>
              <li><a href="landing-page-receive.html">Receive</a></li>
              <li><Link to="about-us">About Us</Link></li>
              <li><Link to="fees">Fees</Link></li>
              <li><Link to="help">Help</Link></li>
              <li class="dropdown"> <a class="dropdown-toggle" href="#">Features</a>
                <ul class="dropdown-menu">
                  <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Headers</a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="index.html">Light Version (Default)</a></li>
                      <li><a class="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                      <li><a class="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                      <li><a class="dropdown-item" href="index-2.html">Transparent Version</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
>>>>>>> d10ea04832c20de57b51ae0f23fe8deeadc3ec75
                    <ul class="dropdown-menu">
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Headers</a>
                        <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="/">Light Version (Default)</Link></li>
                          <li><Link class="dropdown-item" to="headerdark">Dark Version</Link></li>
                          <li><Link class="dropdown-item" to="headerprimary">Primary Version</Link></li>
                          <li><Link class="dropdown-item" to="headertransparent">Transparent Version</Link></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                        <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="lightversion">Light Version (Default)</Link></li>
                          <li><Link class="dropdown-item" to="darkversion">Dark Version</Link></li>
                          <li><Link class="dropdown-item" to="primaryversion">Primary Version</Link></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                        <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="defaultversion">Default Version</Link></li>
                          <li><Link class="dropdown-item" to="alternateversion">Alternate Version</Link></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="feature-page-header-left-alignment.html">Left Alignment</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-center-alignment.html">Center Alignment</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-light.html">Light Version</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-dark.html">Dark Version</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-primary.html">Primary Version</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-custom-background.html">Custom Background</a></li>
                          <li><a class="dropdown-item" href="feature-page-header-custom-background-with-transparent-header.html">Custom Background 2</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Footer</a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="index.html">Light Version Default</a></li>
                          <li><a class="dropdown-item" href="index-2.html">Alternate Version</a></li>
                          <li><a class="dropdown-item" href="feature-footer-dark.html">Dark Version</a></li>
                          <li><a class="dropdown-item" href="feature-footer-primary.html">Primary Version</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                    </ul>
                  </li>
                  <li class="dropdown dropdown-mega"> <a class="dropdown-toggle" href="#">Pages</a>
                    <ul class="dropdown-menu">
                      <li>
                        <div class="dropdown-mega-content">
                          <div class="row">
                            <div class="col-lg-3"> <span class="sub-title">Homepage</span>
                              <ul class="dropdown-mega-submenu">
                                <li><a class="dropdown-item" href="index.html">Home Version 1</a></li>
                                <li><a class="dropdown-item" href="index-2.html">Home Version 2</a></li>
                                <li><Link class="dropdown-item" to="send-us">Landing Page - Send</Link></li>
                                <li><Link class="dropdown-item" to="recieve">Landing Page - Receive</Link></li>
                              </ul>
                            </div>
                            <div class="col-lg-3"> <span class="sub-title">Account</span>
                              <ul class="dropdown-mega-submenu">
                                <li><a class="dropdown-item" href="profile.html">My Profile</a></li>
                                <li><a class="dropdown-item" href="profile-cards-and-bank-accounts.html">Cards & Bank Accounts</a></li>
                                <li><a class="dropdown-item" href="profile-notifications.html">Notifications</a></li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Login</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="login">Login Page 1</Link></li>
                                    <li><Link class="dropdown-item" to="login2">Login Page 2</Link></li>
                                    <li><Link class="dropdown-item" to="login3">Login Page 3</Link></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Signup</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="signin">Signup Page 1</Link></li>
                                    <li><Link class="dropdown-item" to="signin2">Signup Page 2 </Link></li>
                                    <li><Link class="dropdown-item" to="signin3">Signup Page 3 </Link></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3"> <span class="sub-title">Dashboard</span>
                              <ul class="dropdown-mega-submenu">
                                <li><a class="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                <li><a class="dropdown-item" href="transactions.html">Transactions</a></li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="send-money.html">Send Money</a></li>
                                    <li><a class="dropdown-item" href="send-money-confirm.html">Send Money Confirm</a></li>
                                    <li><a class="dropdown-item" href="send-money-success.html">Send Money Success </a></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Request Money</a>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="request-money.html">Request Money</a></li>
                                    <li><a class="dropdown-item" href="request-money-confirm.html">Request Money Confirm</a></li>
                                    <li><a class="dropdown-item" href="request-money-success.html">Request Money Success </a></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="deposit-money.html">Deposit Money</a></li>
                                    <li><a class="dropdown-item" href="deposit-money-confirm.html">Deposit Money Confirm</a></li>
                                    <li><a class="dropdown-item" href="deposit-money-success.html">Deposit Money Success </a></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Withdraw Money</a>
                                  <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="withdraw-money.html">Withdraw Money</a></li>
                                    <li><a class="dropdown-item" href="withdraw-money-confirm.html">Withdraw Money Confirm</a></li>
                                    <li><a class="dropdown-item" href="withdraw-money-success.html">Withdraw Money Success </a></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3"> <span class="sub-title">Others</span>
                              <ul class="dropdown-mega-submenu">
                                <li><a class="dropdown-item" href="about-us.html">About Us</a></li>
                                <li><a class="dropdown-item" href="fees.html">Fees</a></li>
                                <li><a class="dropdown-item" href="help.html">Help</a></li>
                                <li><a class="dropdown-item" href="contact-us.html">Contact Us</a></li>
                                <li><a class="dropdown-item" href="elements.html">Elements</a></li>
                                <li><a class="dropdown-item" href="elements-2.html">Elements 2</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            {/* <!-- Primary Navigation end -->  */}
          </div>

          <div class="header-column justify-content-end">
            {/* <!-- Login & Signup Link
        ============================== --> */}
            <nav class="login-signup navbar navbar-expand">
              <ul class="navbar-nav">
                <li><Link to="login">LogIn</Link></li>
                <li class="align-items-center h-auto ml-sm-3"><Link class="btn btn-primary d-none d-sm-block" to="signin" >Sign Up</Link></li>
              </ul>
            </nav>
            {/* <!-- Login & Signup Link end -->  */}
          </div>
        </div>
      </div>
    </header>)
}

export default Header;