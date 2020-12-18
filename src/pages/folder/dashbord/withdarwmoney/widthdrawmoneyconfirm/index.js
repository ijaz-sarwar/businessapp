import React from 'react'

function WidthDrawMoneyConfirm() {
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
                            {/* Withdraw Money Confirm
                    ============================================= */}
                            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                                <p className="text-4 text-center alert alert-info">You are Withdraw money <br />
                              to<br />
                                    <span className="font-weight-500">HDFC Bank - XXXXXXXXXXXX-9025</span></p>
                                <p className="mb-2 mt-4">Amount to Withdraw <span className="text-3 float-right">1,000.00 USD</span></p>
                                <p className="text-muted">Transactions fees <span className="float-right d-flex align-items-center">5.00 USD</span></p>
                                <hr />
                                <p className="font-weight-500">Total<span className="text-3 float-right">995.00 USD</span></p>
                                <form id="form-withdraw-money-confirm" method="post">
                                    <button className="btn btn-primary btn-block">Withdraw Money</button>
                                </form>
                            </div>
                            {/* Withdraw Money Confirm end */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WidthDrawMoneyConfirm
