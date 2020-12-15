import React from 'react'

function LogIn2() {
    return (

        <div id="main-wrapper" className="h-100">
            <div className="container h-100">
                {/* Login Form
              ============================================= */}
                <div className="row no-gutters h-100">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto">
                        <div className="logo mb-4 text-center"> <a href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></a> </div>
                        <form id="loginForm" method="post">
                            <div className="vertical-input-group">
                                <div className="input-group">
                                    <input type="email" className="form-control" id="emailAddress" required placeholder="Your Email" />
                                </div>
                                <div className="input-group">
                                    <input type="password" className="form-control" id="loginPassword" required placeholder="Password" />
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Login</button>
                        </form>
                        <p className="text-3 text-center text-muted">Don't have an account? <a className="btn-link" href="signup-2.html">Sign Up</a></p>
                        <p className="text-center"><a className="btn-link" href="#">Forgot Password?</a></p>
                    </div>
                    <div className="col-12 fixed-bottom">
                        <p className="text-center text-1 text-muted mb-1">Copyright © 2019 <a href="#">Payyed</a>. All Rights Reserved.</p>
                    </div>
                </div>
                {/* Login Form End */}
            </div>
        </div>
    );
}

export default LogIn2
