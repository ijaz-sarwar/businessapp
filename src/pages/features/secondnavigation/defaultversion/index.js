import React from 'react'

function Defaultversion() {
    return (
        <div id="main-wrapper">
            {/* Header
            ============================================= */}
            <header id="header">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-start">
                            {/* Logo
                    ============================= */}
                            <div className="logo"> <a className="d-flex" href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></a> </div>
                            {/* Logo end */}
                            {/* Collapse Button
                    ============================== */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span /> <span /> <span /> </button>
                            {/* Collapse Button end */}
                            {/* Primary Navigation
                    ============================== */}
                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li><a href="dashboard.html">Dashboard</a></li>
                                        <li><a href="transactions.html">Transactions</a></li>
                                        <li className="active"><a href="send-money.html">Send/Request</a></li>
                                        <li><a href="help.html">Help</a></li>
                                        <li className="dropdown"> <a className="dropdown-toggle" href="#">Features</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Headers</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                                        <li><a className="dropdown-item" href="feature-header-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-header-primary.html">Primary Version</a></li>
                                                        <li><a className="dropdown-item" href="index-2.html">Transparent Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Navigation DropDown</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version (Default)</a></li>
                                                        <li><a className="dropdown-item" href="feature-navigation-dropdown-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-navigation-dropdown-primary.html">Primary Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Second Navigation</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="send-money.html">Default Version</a></li>
                                                        <li><a className="dropdown-item" href="deposit-money.html">Alternate Version</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Page Headers</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="feature-page-header-left-alignment.html">Left Alignment</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-center-alignment.html">Center Alignment</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-light.html">Light Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-primary.html">Primary Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-custom-background.html">Custom Background</a></li>
                                                        <li><a className="dropdown-item" href="feature-page-header-custom-background-with-transparent-header.html">Custom Background 2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Footer</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="index.html">Light Version Default</a></li>
                                                        <li><a className="dropdown-item" href="index-2.html">Alternate Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-footer-dark.html">Dark Version</a></li>
                                                        <li><a className="dropdown-item" href="feature-footer-primary.html">Primary Version</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="feature-layout-boxed.html">Layout Boxed</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown dropdown-mega"> <a className="dropdown-toggle" href="#">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <div className="dropdown-mega-content">
                                                        <div className="row">
                                                            <div className="col-lg-3"> <span className="sub-title">Homepage</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="index.html">Home Version 1</a></li>
                                                                    <li><a className="dropdown-item" href="index-2.html">Home Version 2</a></li>
                                                                    <li><a className="dropdown-item" href="landing-page-send.html">Landing Page - Send</a></li>
                                                                    <li><a className="dropdown-item" href="landing-page-receive.html">Landing Page - Receive</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3"> <span className="sub-title">Account</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                                                    <li><a className="dropdown-item" href="profile-cards-and-bank-accounts.html">Cards &amp; Bank Accounts</a></li>
                                                                    <li><a className="dropdown-item" href="profile-notifications.html">Notifications</a></li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Login</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="login.html">Login Page 1</a></li>
                                                                            <li><a className="dropdown-item" href="login-2.html">Login Page 2</a></li>
                                                                            <li><a className="dropdown-item" href="login-3.html">Login Page 3</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Signup</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="signup.html">Signup Page 1</a></li>
                                                                            <li><a className="dropdown-item" href="signup-2.html">Signup Page 2 </a></li>
                                                                            <li><a className="dropdown-item" href="signup-3.html">Signup Page 3 </a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3"> <span className="sub-title">Dashboard</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="dashboard.html">Dashboard</a></li>
                                                                    <li><a className="dropdown-item" href="transactions.html">Transactions</a></li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Send Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="send-money.html">Send Money</a></li>
                                                                            <li><a className="dropdown-item" href="send-money-confirm.html">Send Money Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="send-money-success.html">Send Money Success </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Request Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="request-money.html">Request Money</a></li>
                                                                            <li><a className="dropdown-item" href="request-money-confirm.html">Request Money Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="request-money-success.html">Request Money Success </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Deposit Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="deposit-money.html">Deposit Money</a></li>
                                                                            <li><a className="dropdown-item" href="deposit-money-confirm.html">Deposit Money Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="deposit-money-success.html">Deposit Money Success </a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="dropdown"><a className="dropdown-item dropdown-toggle" href="#">Withdraw Money</a>
                                                                        <ul className="dropdown-menu">
                                                                            <li><a className="dropdown-item" href="withdraw-money.html">Withdraw Money</a></li>
                                                                            <li><a className="dropdown-item" href="withdraw-money-confirm.html">Withdraw Money Confirm</a></li>
                                                                            <li><a className="dropdown-item" href="withdraw-money-success.html">Withdraw Money Success </a></li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-3"> <span className="sub-title">Others</span>
                                                                <ul className="dropdown-mega-submenu">
                                                                    <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                                                                    <li><a className="dropdown-item" href="fees.html">Fees</a></li>
                                                                    <li><a className="dropdown-item" href="help.html">Help</a></li>
                                                                    <li><a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                                                                    <li><a className="dropdown-item" href="elements.html">Elements</a></li>
                                                                    <li><a className="dropdown-item" href="elements-2.html">Elements 2</a></li>
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
                            {/* Primary Navigation end */}
                        </div>
                        <div className="header-column justify-content-end">
                            {/* Login & Signup Link
                    ============================== */}
                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">
                                    <li><a href="profile.html">Settings</a> </li>
                                    <li className="align-items-center h-auto ml-sm-3"><a className="btn btn-outline-primary shadow-none d-none d-sm-block" href>Sign out</a></li>
                                </ul>
                            </nav>
                            {/* Login & Signup Link end */}
                        </div>
                    </div>
                </div>
            </header>
            {/* Header End */}
            {/* Secondary menu
            ============================================= */}
            <div className="bg-primary">
                <div className="container d-flex justify-content-center">
                    <ul className="nav secondary-nav">
                        <li className="nav-item"> <a className="nav-link active" href="send-money.html">Send</a></li>
                        <li className="nav-item"> <a className="nav-link" href="request-money.html">Request</a></li>
                    </ul>
                </div>
            </div>
            {/* Secondary menu end */}
            {/* Content
            ============================================= */}
            <div id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3">Send Money</h2>
                    <p className="text-4 text-center mb-4">Send your money on anytime, anywhere in the world.</p>
                    <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                                <h3 className="text-5 font-weight-400 mb-3">Personal Details</h3>
                                {/* Send Money Form
                      ============================================= */}
                                <form id="form-send-money" method="post">
                                    <div className="form-group">
                                        <label htmlFor="emailID">Recipient</label>
                                        <input type="text" defaultValue className="form-control" data-bv-field="emailid" id="emailID" required placeholder="Enter Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="youSend">You Send</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                                            <input type="text" className="form-control" data-bv-field="youSend" id="youSend" defaultValue="1,000" placeholder />
                                            <div className="input-group-append"> <span className="input-group-text p-0">
                                                <select id="youSendCurrency" data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required>
                                                    <optgroup label="Popular Currency">
                                                        <option data-icon="currency-flag currency-flag-usd mr-1" data-subtext="United States dollar" selected="selected" value>USD</option>
                                                        <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value>AUD</option>
                                                        <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value>INR</option>
                                                    </optgroup>
                                                    <option value data-divider="true">divider</option>
                                                    <optgroup label="Other Currency">
                                                        <option data-icon="currency-flag currency-flag-aed mr-1" data-subtext="United Arab Emirates dirham" value>AED</option>
                                                        <option data-icon="currency-flag currency-flag-ars mr-1" data-subtext="Argentine peso" value>ARS</option>
                                                        <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value>AUD</option>
                                                        <option data-icon="currency-flag currency-flag-bdt mr-1" data-subtext="Bangladeshi taka" value>BDT</option>
                                                        <option data-icon="currency-flag currency-flag-bgn mr-1" data-subtext="Bulgarian lev" value>BGN</option>
                                                        <option data-icon="currency-flag currency-flag-brl mr-1" data-subtext="Brazilian real" value>BRL</option>
                                                        <option data-icon="currency-flag currency-flag-cad mr-1" data-subtext="Canadian dollar" value>CAD</option>
                                                        <option data-icon="currency-flag currency-flag-chf mr-1" data-subtext="Swiss franc" value>CHF</option>
                                                        <option data-icon="currency-flag currency-flag-clp mr-1" data-subtext="Chilean peso" value>CLP</option>
                                                        <option data-icon="currency-flag currency-flag-cny mr-1" data-subtext="Chinese yuan" value>CNY</option>
                                                        <option data-icon="currency-flag currency-flag-czk mr-1" data-subtext="Czech koruna" value>CZK</option>
                                                        <option data-icon="currency-flag currency-flag-dkk mr-1" data-subtext="Danish krone" value>DKK</option>
                                                        <option data-icon="currency-flag currency-flag-egp mr-1" data-subtext="Egyptian pound" value>EGP</option>
                                                        <option data-icon="currency-flag currency-flag-eur mr-1" data-subtext="Euro" value>EUR</option>
                                                        <option data-icon="currency-flag currency-flag-gbp mr-1" data-subtext="British pound" value>GBP</option>
                                                        <option data-icon="currency-flag currency-flag-gel mr-1" data-subtext="Georgian lari" value>GEL</option>
                                                        <option data-icon="currency-flag currency-flag-ghs mr-1" data-subtext="Ghanaian cedi" value>GHS</option>
                                                        <option data-icon="currency-flag currency-flag-hkd mr-1" data-subtext="Hong Kong dollar" value>HKD</option>
                                                        <option data-icon="currency-flag currency-flag-hrk mr-1" data-subtext="Croatian kuna" value>HRK</option>
                                                        <option data-icon="currency-flag currency-flag-huf mr-1" data-subtext="Hungarian forint" value>HUF</option>
                                                        <option data-icon="currency-flag currency-flag-idr mr-1" data-subtext="Indonesian rupiah" value>IDR</option>
                                                        <option data-icon="currency-flag currency-flag-ils mr-1" data-subtext="Israeli shekel" value>ILS</option>
                                                        <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value>INR</option>
                                                        <option data-icon="currency-flag currency-flag-jpy mr-1" data-subtext="Japanese yen" value>JPY</option>
                                                        <option data-icon="currency-flag currency-flag-kes mr-1" data-subtext="Kenyan shilling" value>KES</option>
                                                        <option data-icon="currency-flag currency-flag-krw mr-1" data-subtext="South Korean won" value>KRW</option>
                                                        <option data-icon="currency-flag currency-flag-lkr mr-1" data-subtext="Sri Lankan rupee" value>LKR</option>
                                                        <option data-icon="currency-flag currency-flag-mad mr-1" data-subtext="Moroccan dirham" value>MAD</option>
                                                        <option data-icon="currency-flag currency-flag-mxn mr-1" data-subtext="Mexican peso" value>MXN</option>
                                                        <option data-icon="currency-flag currency-flag-myr mr-1" data-subtext="Malaysian ringgit" value>MYR</option>
                                                        <option data-icon="currency-flag currency-flag-ngn mr-1" data-subtext="Nigerian naira" value>NGN</option>
                                                        <option data-icon="currency-flag currency-flag-nok mr-1" data-subtext="Norwegian krone" value>NOK</option>
                                                        <option data-icon="currency-flag currency-flag-npr mr-1" data-subtext="Nepalese rupee" value>NPR</option>
                                                        <option data-icon="currency-flag currency-flag-nzd mr-1" data-subtext="New Zealand dollar" value>NZD</option>
                                                        <option data-icon="currency-flag currency-flag-pen mr-1" data-subtext="Peruvian nuevo sol" value>PEN</option>
                                                        <option data-icon="currency-flag currency-flag-php mr-1" data-subtext="Philippine peso" value>PHP</option>
                                                        <option data-icon="currency-flag currency-flag-pkr mr-1" data-subtext="Pakistani rupee" value>PKR</option>
                                                        <option data-icon="currency-flag currency-flag-pln mr-1" data-subtext="Polish złoty" value>PLN</option>
                                                        <option data-icon="currency-flag currency-flag-ron mr-1" data-subtext="Romanian leu" value>RON</option>
                                                        <option data-icon="currency-flag currency-flag-rub mr-1" data-subtext="Russian rouble" value>RUB</option>
                                                        <option data-icon="currency-flag currency-flag-sek mr-1" data-subtext="Swedish krona" value>SEK</option>
                                                        <option data-icon="currency-flag currency-flag-sgd mr-1" data-subtext="Singapore dollar" value>SGD</option>
                                                        <option data-icon="currency-flag currency-flag-thb mr-1" data-subtext="Thai baht" value>THB</option>
                                                        <option data-icon="currency-flag currency-flag-try mr-1" data-subtext="Turkish lira" value>TRY</option>
                                                        <option data-icon="currency-flag currency-flag-uah mr-1" data-subtext="Ukrainian hryvnia" value>UAH</option>
                                                        <option data-icon="currency-flag currency-flag-ugx mr-1" data-subtext="Ugandan shilling" value>UGX</option>
                                                        <option data-icon="currency-flag currency-flag-vnd mr-1" data-subtext="Vietnamese dong" value>VND</option>
                                                        <option data-icon="currency-flag currency-flag-zar mr-1" data-subtext="South African rand" value>ZAR</option>
                                                    </optgroup>
                                                </select>
                                            </span> </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="recipientGets">Recipient Gets</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                                            <input type="text" className="form-control" data-bv-field="recipientGets" id="recipientGets" defaultValue="1,410.06" placeholder />
                                            <div className="input-group-append"> <span className="input-group-text p-0">
                                                <select id="recipientCurrency" data-style="custom-select bg-transparent border-0" data-container="body" data-live-search="true" className="selectpicker form-control bg-transparent" required>
                                                    <optgroup label="Popular Currency">
                                                        <option data-icon="currency-flag currency-flag-usd mr-1" data-subtext="United States dollar" value>USD</option>
                                                        <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" selected="selected" value>AUD</option>
                                                        <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value>INR</option>
                                                    </optgroup>
                                                    <option value data-divider="true">divider</option>
                                                    <optgroup label="Other Currency">
                                                        <option data-icon="currency-flag currency-flag-aed mr-1" data-subtext="United Arab Emirates dirham" value>AED</option>
                                                        <option data-icon="currency-flag currency-flag-ars mr-1" data-subtext="Argentine peso" value>ARS</option>
                                                        <option data-icon="currency-flag currency-flag-aud mr-1" data-subtext="Australian dollar" value>AUD</option>
                                                        <option data-icon="currency-flag currency-flag-bdt mr-1" data-subtext="Bangladeshi taka" value>BDT</option>
                                                        <option data-icon="currency-flag currency-flag-bgn mr-1" data-subtext="Bulgarian lev" value>BGN</option>
                                                        <option data-icon="currency-flag currency-flag-brl mr-1" data-subtext="Brazilian real" value>BRL</option>
                                                        <option data-icon="currency-flag currency-flag-cad mr-1" data-subtext="Canadian dollar" value>CAD</option>
                                                        <option data-icon="currency-flag currency-flag-chf mr-1" data-subtext="Swiss franc" value>CHF</option>
                                                        <option data-icon="currency-flag currency-flag-clp mr-1" data-subtext="Chilean peso" value>CLP</option>
                                                        <option data-icon="currency-flag currency-flag-cny mr-1" data-subtext="Chinese yuan" value>CNY</option>
                                                        <option data-icon="currency-flag currency-flag-czk mr-1" data-subtext="Czech koruna" value>CZK</option>
                                                        <option data-icon="currency-flag currency-flag-dkk mr-1" data-subtext="Danish krone" value>DKK</option>
                                                        <option data-icon="currency-flag currency-flag-egp mr-1" data-subtext="Egyptian pound" value>EGP</option>
                                                        <option data-icon="currency-flag currency-flag-eur mr-1" data-subtext="Euro" value>EUR</option>
                                                        <option data-icon="currency-flag currency-flag-gbp mr-1" data-subtext="British pound" value>GBP</option>
                                                        <option data-icon="currency-flag currency-flag-gel mr-1" data-subtext="Georgian lari" value>GEL</option>
                                                        <option data-icon="currency-flag currency-flag-ghs mr-1" data-subtext="Ghanaian cedi" value>GHS</option>
                                                        <option data-icon="currency-flag currency-flag-hkd mr-1" data-subtext="Hong Kong dollar" value>HKD</option>
                                                        <option data-icon="currency-flag currency-flag-hrk mr-1" data-subtext="Croatian kuna" value>HRK</option>
                                                        <option data-icon="currency-flag currency-flag-huf mr-1" data-subtext="Hungarian forint" value>HUF</option>
                                                        <option data-icon="currency-flag currency-flag-idr mr-1" data-subtext="Indonesian rupiah" value>IDR</option>
                                                        <option data-icon="currency-flag currency-flag-ils mr-1" data-subtext="Israeli shekel" value>ILS</option>
                                                        <option data-icon="currency-flag currency-flag-inr mr-1" data-subtext="Indian rupee" value>INR</option>
                                                        <option data-icon="currency-flag currency-flag-jpy mr-1" data-subtext="Japanese yen" value>JPY</option>
                                                        <option data-icon="currency-flag currency-flag-kes mr-1" data-subtext="Kenyan shilling" value>KES</option>
                                                        <option data-icon="currency-flag currency-flag-krw mr-1" data-subtext="South Korean won" value>KRW</option>
                                                        <option data-icon="currency-flag currency-flag-lkr mr-1" data-subtext="Sri Lankan rupee" value>LKR</option>
                                                        <option data-icon="currency-flag currency-flag-mad mr-1" data-subtext="Moroccan dirham" value>MAD</option>
                                                        <option data-icon="currency-flag currency-flag-mxn mr-1" data-subtext="Mexican peso" value>MXN</option>
                                                        <option data-icon="currency-flag currency-flag-myr mr-1" data-subtext="Malaysian ringgit" value>MYR</option>
                                                        <option data-icon="currency-flag currency-flag-ngn mr-1" data-subtext="Nigerian naira" value>NGN</option>
                                                        <option data-icon="currency-flag currency-flag-nok mr-1" data-subtext="Norwegian krone" value>NOK</option>
                                                        <option data-icon="currency-flag currency-flag-npr mr-1" data-subtext="Nepalese rupee" value>NPR</option>
                                                        <option data-icon="currency-flag currency-flag-nzd mr-1" data-subtext="New Zealand dollar" value>NZD</option>
                                                        <option data-icon="currency-flag currency-flag-pen mr-1" data-subtext="Peruvian nuevo sol" value>PEN</option>
                                                        <option data-icon="currency-flag currency-flag-php mr-1" data-subtext="Philippine peso" value>PHP</option>
                                                        <option data-icon="currency-flag currency-flag-pkr mr-1" data-subtext="Pakistani rupee" value>PKR</option>
                                                        <option data-icon="currency-flag currency-flag-pln mr-1" data-subtext="Polish złoty" value>PLN</option>
                                                        <option data-icon="currency-flag currency-flag-ron mr-1" data-subtext="Romanian leu" value>RON</option>
                                                        <option data-icon="currency-flag currency-flag-rub mr-1" data-subtext="Russian rouble" value>RUB</option>
                                                        <option data-icon="currency-flag currency-flag-sek mr-1" data-subtext="Swedish krona" value>SEK</option>
                                                        <option data-icon="currency-flag currency-flag-sgd mr-1" data-subtext="Singapore dollar" value>SGD</option>
                                                        <option data-icon="currency-flag currency-flag-thb mr-1" data-subtext="Thai baht" value>THB</option>
                                                        <option data-icon="currency-flag currency-flag-try mr-1" data-subtext="Turkish lira" value>TRY</option>
                                                        <option data-icon="currency-flag currency-flag-uah mr-1" data-subtext="Ukrainian hryvnia" value>UAH</option>
                                                        <option data-icon="currency-flag currency-flag-ugx mr-1" data-subtext="Ugandan shilling" value>UGX</option>
                                                        <option data-icon="currency-flag currency-flag-vnd mr-1" data-subtext="Vietnamese dong" value>VND</option>
                                                        <option data-icon="currency-flag currency-flag-zar mr-1" data-subtext="South African rand" value>ZAR</option>
                                                    </optgroup>
                                                </select>
                                            </span> </div>
                                        </div>
                                    </div>
                                    <p className="text-muted text-center">The current exchange rate is <span className="font-weight-500">1 USD = 1.42030 AUD</span></p>
                                    <hr />
                                    <p className="mb-1">Total fees <span className="text-3 float-right">7.21 USD</span></p>
                                    <p className="font-weight-500">Total To Pay <span className="text-3 float-right">1,000.00 USD</span></p>
                                    <button className="btn btn-primary btn-block">Continue</button>
                                </form>
                                {/* Send Money Form end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Content end */}
        </div>
    );
}

export default Defaultversion
