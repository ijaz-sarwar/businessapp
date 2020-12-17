import React from 'react'

function SignIn2() {
    return (
        <div>
            <div className="row no-gutters h-100">
                <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto">
                    <div className="logo mb-4 text-center"> <a href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></a> </div>
                    <form id="loginForm" method="post">
                        <div className="vertical-input-group">
                            <div className="input-group">
                                <input type="text" className="form-control" id="fullName" required placeholder="Your Name" />
                            </div>
                            <div className="input-group">
                                <input type="email" className="form-control" id="emailAddress" required placeholder="Your Email" />
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" id="loginPassword" required placeholder="Password" />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Sign Up</button>
                    </form>
                    <p className="text-3 text-center text-muted">Already have an account? <a className="btn-link" href="login-2.html">Log In</a></p>
                </div>
                <div className="col-12 fixed-bottom">
                    <p className="text-center text-1 text-muted mb-1">Copyright © 2019 <a href="#">Payyed</a>. All Rights Reserved.</p>
                </div>
            </div>
            {/* SignUp Form End */}
            <div className="row no-gutters h-100">
                <div className="col-11 col-sm-9 col-md-7 col-lg-5 col-xl-4 m-auto">
                    <div className="logo mb-4 text-center"> <a href="index.html" title="Payyed - HTML Template"><img src="images/logo.png" alt="Payyed" /></a> </div>
                    <form id="loginForm" method="post">
                        <div className="vertical-input-group">
                            <div className="input-group">
                                <input type="text" className="form-control" id="fullName" required placeholder="Your Name" />
                            </div>
                            <div className="input-group">
                                <input type="email" className="form-control" id="emailAddress" required placeholder="Your Email" />
                            </div>
                            <div className="input-group">
                                <input type="password" className="form-control" id="loginPassword" required placeholder="Password" />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Sign Up</button>
                    </form>
                    <p className="text-3 text-center text-muted">Already have an account? <a className="btn-link" href="login-2.html">Log In</a></p>
                </div>
                <div className="col-12 fixed-bottom">
                    <p className="text-center text-1 text-muted mb-1">Copyright © 2019 <a href="#">Payyed</a>. All Rights Reserved.</p>
                </div>
            </div>
            {/* SignUp Form End */}
        </div>
    );
}

export default SignIn2
