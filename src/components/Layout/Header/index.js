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
            <nav class="primary-menu navbar navbar-expand-lg">
              <div id="header-nav" class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <li><Link to="send-us">Send</Link></li>
                  <li><Link to="recieve">Recieve</Link></li>
                  <li><Link to="about-us">About Us</Link></li>
                  <li><Link to="fees">Fees</Link></li>
                  <li><Link to="help">Help</Link></li>
                  <li class="dropdown"> <a class="dropdown-toggle" href="#">Features</a>
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
                          <li><Link class="dropdown-item" to="leftalignment">Left Alignment</Link></li>
                          <li><Link class="dropdown-item" to="centeralignment">Center Alignment</Link></li>
                          <li><Link class="dropdown-item" to="lightversion">Light Version</Link></li>
                          <li><Link class="dropdown-item" to="darkversion">Dark Version</Link></li>
                          <li><Link class="dropdown-item" to="primaryversion">Primary Version</Link></li>
                          <li><Link class="dropdown-item" to="custombackground">Custom Background</Link></li>
                          <li><Link class="dropdown-item" to="custombackground2">Custom Background 2</Link></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Footer</a>
                        <ul class="dropdown-menu">
                          <li><Link class="dropdown-item" to="lightversiondefault">Light Version Default</Link></li>
                          <li><Link class="dropdown-item" to="alternateversionfooter">Alternate Version</Link></li>
                          <li><Link class="dropdown-item" to="darkversionfooter">Dark Version</Link></li>
                          <li><Link class="dropdown-item" to="primaryversiondefooter">Primary Version</Link></li>
                        </ul>
                      </li>
                      <li><Link class="dropdown-item" to="layoutboxed">Layout Boxed</Link></li>
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
                                <li><Link class="dropdown-item" to="myprofile">My Profile</Link></li>
                                <li><Link class="dropdown-item" to="cashbank">Cards & Bank Accounts</Link></li>
                                <li><Link class="dropdown-item" to="notification">Notifications</Link></li>
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
                                <li><Link class="dropdown-item" to="dashboard">Dashboard</Link></li>
                                <li><Link class="dropdown-item" to="transaction">Transactions</Link></li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="sendmoney">Send Money</Link></li>
                                    <li><Link class="dropdown-item" to="sendmoneyconfirm">Send Money Confirm</Link></li>
                                    <li><Link class="dropdown-item" to="sendmoneysuccess">Send Money Success </Link></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" to="#">Request Money</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="requestmoney">Request Money</Link></li>
                                    <li><Link class="dropdown-item" to="requestmoneyconfirm">Request Money Confirm</Link></li>
                                    <li><Link class="dropdown-item" to="requestmoneysuccess">Request Money Success </Link></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="depositemoney">Deposit Money</Link></li>
                                    <li><Link class="dropdown-item" to="depositemoneyconfirm">Deposit Money Confirm</Link></li>
                                    <li><Link class="dropdown-item" to="depositemoneysuccess">Deposit Money Success </Link></li>
                                  </ul>
                                </li>
                                <li class="dropdown"><a class="dropdown-item dropdown-toggle" href="#">Withdraw Money</a>
                                  <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="withdrawmoney">Withdraw Money</Link></li>
                                    <li><Link class="dropdown-item" to="withdrawmoneyconfirm">Withdraw Money Confirm</Link></li>
                                    <li><Link class="dropdown-item" to="withdrawmoneysucces">Withdraw Money Success </Link></li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                            <div class="col-lg-3"> <span class="sub-title">Others</span>
                              <ul class="dropdown-mega-submenu">
                                <li><Link class="dropdown-item" to="about-us">About Us</Link></li>
                                <li><Link class="dropdown-item" to="fees">Fees</Link></li>
                                <li><Link class="dropdown-item" to="help">Help</Link></li>
                                <li><Link class="dropdown-item" to="contactus">Contact Us</Link></li>
                                <li><Link class="dropdown-item" to="elements">Elements</Link></li>
                                <li><Link class="dropdown-item" to="elements2">Elements 2</Link></li>
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