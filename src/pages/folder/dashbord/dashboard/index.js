import React from 'react'

function Dashboard() {
    return (
        <div id="content" className="py-4">
            <div className="container">
                <div className="row">
                    {/* Left Panel
              ============================================= */}
                    <aside className="col-lg-3">
                        {/* Profile Details
                =============================== */}
                        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                            <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="images/profile-thumb.jpg" alt="" />
                                <div className="profile-thumb-edit custom-file bg-primary text-white" data-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute" />
                                    <input type="file" className="custom-file-input" id="customFile" />
                                </div>
                            </div>
                            <p className="text-3 font-weight-500 mb-2">Hello, Smith Rhodes</p>
                            <p className="mb-2"><a href="profile.html" className="text-5 text-light" data-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit" /></a></p>
                        </div>
                        {/* Profile Details End */}
                        {/* Available Balance
                =============================== */}
                        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                            <div className="text-17 text-light my-3"><i className="fas fa-wallet" /></div>
                            <h3 className="text-9 font-weight-400">$2956.00</h3>
                            <p className="mb-2 text-muted opacity-8">Available Balance</p>
                            <hr className="mx-n3" />
                            <div className="d-flex"><a href="#" className="btn-link mr-auto">Withdraw</a> <a href="#" className="btn-link ml-auto">Deposit</a></div>
                        </div>
                        {/* Available Balance End */}
                        {/* Need Help?
                =============================== */}
                        <div className="bg-light shadow-sm rounded text-center p-3 mb-4">
                            <div className="text-17 text-light my-3"><i className="fas fa-comments" /></div>
                            <h3 className="text-3 font-weight-400 my-4">Need Help?</h3>
                            <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br />
                        Our experts are here to help!.</p>
                            <a href="#" className="btn btn-primary btn-block">Chate with Us</a>
                        </div>
                        {/* Need Help? End */}
                    </aside>
                    {/* Left Panel End */}
                    {/* Middle Panel
              ============================================= */}
                    <div className="col-lg-9">
                        {/* Profile Completeness
                =============================== */}
                        <div className="bg-light shadow-sm rounded p-4 mb-4">
                            <h3 className="text-5 font-weight-400 d-flex align-items-center mb-3">Profile Completeness <span className="bg-light-4 text-success rounded px-2 py-1 font-weight-400 text-2 ml-2">50%</span></h3>
                            <div className="row profile-completeness">
                                <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-mobile-alt" /></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle" /></span>
                                        <p className="mb-0">Mobile Added</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-4 mb-md-0">
                                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-envelope" /></span> <span className="text-5 d-block text-success mt-4 mb-3"><i className="fas fa-check-circle" /></span>
                                        <p className="mb-0">Email Added</p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-4 mb-sm-0">
                                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-credit-card" /></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle " /></span>
                                        <p className="mb-0"><a className="btn-link stretched-link" href>Add Card</a></p>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="border rounded p-3 text-center"> <span className="d-block text-10 text-light mt-2 mb-3"><i className="fas fa-university" /></span> <span className="text-5 d-block text-light mt-4 mb-3"><i className="far fa-circle " /></span>
                                        <p className="mb-0"><a className="btn-link stretched-link" href>Add Bank Account</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Profile Completeness End */}
                        {/* Recent Activity
                =============================== */}
                        <div className="bg-light shadow-sm rounded py-4 mb-4">
                            <h3 className="text-5 font-weight-400 d-flex align-items-center px-4 mb-3">Recent Activity</h3>
                            {/* Title
                  =============================== */}
                            <div className="transaction-title py-2 px-4">
                                <div className="row">
                                    <div className="col-2 col-sm-1 text-center"><span className>Date</span></div>
                                    <div className="col col-sm-7">Description</div>
                                    <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                                    <div className="col-3 col-sm-2 text-right">Amount</div>
                                </div>
                            </div>
                            {/* Title End */}
                            {/* Transaction List
                  =============================== */}
                            <div className="transaction-list">
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">16</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-warning" data-toggle="tooltip" data-original-title="In Progress"><i className="fas fa-ellipsis-h" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">15</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">04</span> <span className="d-block text-1 font-weight-300 text-uppercase">APR</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $106</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">28</span> <span className="d-block text-1 font-weight-300 text-uppercase">MAR</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Refund</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">28</span> <span className="d-block text-1 font-weight-300 text-uppercase">MAR</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Payment Sent</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-toggle="tooltip" data-original-title="Cancelled"><i className="fas fa-times-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">16</span> <span className="d-block text-1 font-weight-300 text-uppercase">FEB</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">- $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                                <div className="transaction-item px-4 py-3" data-toggle="modal" data-target="#transaction-detail">
                                    <div className="row align-items-center flex-row">
                                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 font-weight-300">15</span> <span className="d-block text-1 font-weight-300 text-uppercase">FEB</span> </div>
                                        <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-toggle="tooltip" data-original-title="Completed"><i className="fas fa-check-circle" /></span> </div>
                                        <div className="col-3 col-sm-2 text-right text-4"> <span className="text-nowrap">+ $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                                    </div>
                                </div>
                            </div>
                            {/* Transaction List End */}
                            {/* Transaction Item Details Modal
                  =========================================== */}
                            <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row no-gutters">
                                                <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-left py-4">
                                                    <div className="my-auto text-center">
                                                        <div className="text-17 text-white my-3"><i className="fas fa-building" /></div>
                                                        <h3 className="text-4 text-white font-weight-400 my-3">Envato Pty Ltd</h3>
                                                        <div className="text-8 font-weight-500 text-white my-4">$557.20</div>
                                                        <p className="text-white">15 March 2019</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-7">
                                                    <h5 className="text-5 font-weight-400 m-3">Transaction Details
                                    <button type="button" className="close font-weight-400" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                                                    </h5>
                                                    <hr />
                                                    <div className="px-3">
                                                        <ul className="list-unstyled">
                                                            <li className="mb-2">Payment Amount <span className="float-right text-3">$562.00</span></li>
                                                            <li className="mb-2">Fee <span className="float-right text-3">-$4.80</span></li>
                                                        </ul>
                                                        <hr className="mb-2" />
                                                        <p className="d-flex align-items-center font-weight-500 mb-4">Total Amount <span className="text-3 ml-auto">$557.20</span></p>
                                                        <ul className="list-unstyled">
                                                            <li className="font-weight-500">Paid By:</li>
                                                            <li className="text-muted">Envato Pty Ltd</li>
                                                        </ul>
                                                        <ul className="list-unstyled">
                                                            <li className="font-weight-500">Transaction ID:</li>
                                                            <li className="text-muted">26566689645685976589</li>
                                                        </ul>
                                                        <ul className="list-unstyled">
                                                            <li className="font-weight-500">Description:</li>
                                                            <li className="text-muted">Envato March 2019 Member Payment</li>
                                                        </ul>
                                                        <ul className="list-unstyled">
                                                            <li className="font-weight-500">Status:</li>
                                                            <li className="text-muted">Completed</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Transaction Item Details Modal End */}
                            {/* View all Link
                  =============================== */}
                            <div className="text-center mt-4"><a href="transactions.html" className="btn-link text-3">View all<i className="fas fa-chevron-right text-2 ml-2" /></a></div>
                            {/* View all Link End */}
                        </div>
                        {/* Recent Activity End */}
                    </div>
                    {/* Middle Panel End */}
                </div>
            </div>
        </div>
    );
}
export default Dashboard
