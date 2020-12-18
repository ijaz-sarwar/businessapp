import React from 'react'

function DepositMoney() {
    return (
        <div>
            <div className="bg-white">
                <div className="container d-flex justify-content-center">
                    <ul className="nav secondary-nav alternate">
                        <li className="nav-item"> <a className="nav-link active" href="deposit-money.html">Deposit</a></li>
                        <li className="nav-item"> <a className="nav-link" href="withdraw-money.html">Withdraw</a></li>
                    </ul>
                </div>
            </div>
            {/* Secondary menu end */}
            {/* Content
            ============================================= */}
            <div id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3 mb-4">Deposit Money</h2>
                    <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                                {/* Deposit Money Form
                      ============================================= */}
                                <form id="form-send-money" method="post">
                                    <div className="form-group">
                                        <label htmlFor="youSend">Amount</label>
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
                                        <label htmlFor="paymentMethod">Payment Method</label>
                                        <select id="cardType" className="custom-select" required>
                                            <option value>Select Payment Method</option>
                                            <option>Credit or Debit Cards</option>
                                            <option>Bank Accounts</option>
                                        </select>
                                    </div>
                                    <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center"><del>1.00 USD</del> <span className="bg-success text-1 text-white font-weight-500 rounded d-inline-block px-2 line-height-4 ml-2">Free</span></span></p>
                                    <hr />
                                    <p className="font-weight-500">You'll deposit <span className="text-3 float-right">1,000.00 USD</span></p>
                                    <button className="btn btn-primary btn-block">Continue</button>
                                </form>
                                {/* Deposit Money Form end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DepositMoney