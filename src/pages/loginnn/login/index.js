import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
    return (

        <div>
            <div id="main-wrapper" className="h-100">
                <div className="container-fluid px-0 h-100">
                    <div className="row no-gutters h-100">
                        {/* Welcome Text
                ============================================= */}
                        <div className="col-md-6">
                            <div className="hero-wrap d-flex align-items-center h-100">
                                <div className="hero-mask opacity-8 bg-primary" />
                                <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: 'url("./images/bg/image-3.jpg")' }} />
                                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                    <div className="row no-gutters">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <div className="logo mt-5 mb-5 mb-md-0"> <a className="d-flex" href="index.html" title="Payyed - HTML Template"><img src="images/logo-light.png" alt="Payyed" /></a> </div>
                                        </div>
                                    </div>
                                    <div className="row no-gutters my-auto">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <h1 className="text-11 text-white mb-4">Welcome back!</h1>
                                            <p className="text-4 text-white line-height-4 mb-5">We are glad to see you again! Instant deposits, withdrawals &amp; payouts trusted by millions worldwide.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Welcome Text End */}
                        {/* Login Form
                ============================================= */}
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="container my-4">
                                <div className="row">
                                    <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                                        <h3 className="font-weight-400 mb-4">Log In</h3>
                                        <form id="loginForm" method="post">
                                            <div className="form-group">
                                                <label htmlFor="emailAddress">Email Address</label>
                                                <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="loginPassword">Password</label>
                                                <input type="password" className="form-control" id="loginPassword" required placeholder="Enter Password" />
                                            </div>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="form-check custom-control custom-checkbox">
                                                        <input id="remember-me" name="remember" className="custom-control-input" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-sm text-right"><a className="btn-link" href="#">Forgot Password ?</a></div>
                                            </div>
                                            <button className="btn btn-primary btn-block my-4" type="submit">Login</button>
                                        </form>
                                        <p className="text-3 text-center text-muted">Don't have an account? <Link className="btn-link" to="signin">Sign Up</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Login Form End */}
                    </div>
                </div>
            </div>
            {/* Back to Top
          ============================================= */}
            <a id="back-to-top" data-toggle="tooltip" title="Back to Top" href="javascript:void(0)"><i className="fa fa-chevron-up" /></a>
            {/* Script */}
        </div>

    )
}

export default LogIn
