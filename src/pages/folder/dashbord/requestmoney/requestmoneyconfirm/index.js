import React from 'react'

function RequestMoneyConfirm() {
    return (
        <div>
            <div className="bg-primary">
                <div className="container d-flex justify-content-center">
                    <ul className="nav secondary-nav">
                        <li className="nav-item"> <a className="nav-link" href="send-money.html">Send</a></li>
                        <li className="nav-item"> <a className="nav-link active" href="request-money.html">Request</a></li>
                    </ul>
                </div>
            </div>
            {/* Secondary menu end */}
            {/* Content
            ============================================= */}
            <div id="content" className="py-4">
                <div className="container">
                    <h2 className="font-weight-400 text-center mt-3">Request Money</h2>
                    <p className="text-4 text-center mb-4">You are requesting money from <span className="font-weight-500">demo@gmail.com</span></p>
                    <div className="row">
                        <div className="col-md-8 col-lg-6 mx-auto">
                            <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4">
                                {/* Request Money Confirm Details
                      ============================================= */}
                                <h3 className="text-5 font-weight-400 mb-3">Confirm Details</h3>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Name</p>
                                    <p className="col-sm-8">Smith Rhodes</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Email</p>
                                    <p className="col-sm-8">demo@gmail.com</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Country</p>
                                    <p className="col-sm-8">Australia</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Payment due by</p>
                                    <p className="col-sm-8">08-13-2019</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right font-weight-500 mb-0 mb-sm-3">Requested Amount</p>
                                    <p className="col-sm-8 font-weight-500">1,000.00 USD</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm-4 text-muted text-sm-right mb-0 mb-sm-3">Description</p>
                                    <p className="col-sm-8">Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et.</p>
                                </div>
                                <form id="form-send-money" method="post">
                                    <button className="btn btn-primary btn-block">Request Money</button>
                                </form>
                                {/* Request Money Confirm Details end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RequestMoneyConfirm
