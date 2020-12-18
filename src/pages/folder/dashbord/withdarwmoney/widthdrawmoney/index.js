import React from 'react'

function WithDrawMoney() {
    return (
        <div>
            <div className="bg-white">
                <div className="container d-flex justify-content-center">
                    <ul className="nav secondary-nav alternate">
                        <li className="nav-item"> <a className="nav-link" href="deposit-money.html">Deposit</a></li>
                        <li className="nav-item"> <a className="nav-link active" href="withdraw-money.html">Withdraw</a></li>
                    </ul>
                </div>
            </div>
            {/* Secondary menu end */}
            {/* Content
            ============================================= */}
            <div id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3 mb-4">Withdraw Money</h2>
                    <div className="row">
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            {/* Withdraw Money Form
                  ============================================= */}
                            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                                <div className="text-center bg-primary p-4 rounded mb-4">
                                    <h3 className="text-10 text-white font-weight-400">$2956.00</h3>
                                    <p className="text-white">Available Balance</p>
                                    <a href className="btn btn-outline-light btn-sm shadow-none text-uppercase rounded-pill text-1">Withdraw Full Amount</a> </div>
                                <form id="form-send-money" method="post">
                                    <div className="form-group">
                                        <label htmlFor="withdrawto">Withdraw to</label>
                                        <select id="withdrawto" className="custom-select" required>
                                            <option value>HDFC Bank - XXXXXXXXXXXX-9025</option>
                                            <option>Bank A/c 2 - XXXXXX-1211</option>
                                            <option>Bank A/c 3 - XXXXXX-2011</option>
                                            <option>Bank A/c 4 - XXXXXX-2011</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="youSend">Amount</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"> <span className="input-group-text">$</span> </div>
                                            <input type="text" className="form-control" data-bv-field="youSend" id="youSend" defaultValue="1,000" placeholder />
                                        </div>
                                    </div>
                                    <p className="text-muted mt-4">Transactions fees <span className="float-right d-flex align-items-center">5.00 USD</span></p>
                                    <p className="font-weight-500">Amount to Withdraw <span className="text-3 float-right">1,000.00 USD</span></p>
                                    <button className="btn btn-primary btn-block">Continue</button>
                                </form>
                            </div>
                            {/* Withdraw Money Form end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithDrawMoney
