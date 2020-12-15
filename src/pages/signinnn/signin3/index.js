import React from 'react'

function SignIn3() {
    return (
        <div id="content">
            <div className="login-signup-page mx-auto my-5">
                <h3 className="font-weight-400 text-center">Sign Up</h3>
                <p className="lead text-center">Your Sign Up information is safe with us.</p>
                <div className="bg-light shadow-md rounded p-4 mx-2">
                    <form id="signupForm" method="post">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" className="form-control" id="fullName" required placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="emailAddress">Email Address</label>
                            <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginPassword">Password</label>
                            <input type="password" className="form-control" id="loginPassword" required placeholder="Enter Password" />
                        </div>
                        <button className="btn btn-primary btn-block my-4" type="submit">Sign Up</button>
                    </form>
                    <p className="text-3 text-muted text-center mb-0">Already have an account? <a className="btn-link" href="login-3.html">Log In</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn3
