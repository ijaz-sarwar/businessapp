import React from 'react'

function LogIn3() {
    return (

        <div id="content">
            <div className="login-signup-page mx-auto my-5">
                <h3 className="font-weight-400 text-center">Sign In</h3>
                <p className="lead text-center">Your login information is safe with us.</p>
                <div className="bg-light shadow-md rounded p-4 mx-2">
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
                        <button className="btn btn-primary btn-block my-4" type="submit">Sign In</button>
                    </form>
                    <p className="text-3 text-muted text-center mb-0">Don't have an account? <a className="btn-link" href="signup-3.html">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default LogIn3
