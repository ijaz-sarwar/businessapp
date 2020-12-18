import React from 'react'

function ContactUs() {
    return (
        <div>
            <section className="page-header page-header-text-light bg-dark-3 py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <ul className="breadcrumb mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page Header End */}
            {/* Content
            ============================================= */}
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4"> <i className="fas fa-map-marker-alt" /></div>
                                    <h3>Payyed Inc.</h3>
                                    <p>4th Floor, Plot No.22, Above Public Park<br />
                                145 Murphy Canyon Rd.<br />
                                Suite 100-18<br />
                                San Diego CA 2028 </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4"> <i className="fas fa-phone" /> </div>
                                    <h3>Telephone</h3>
                                    <p className="mb-0">(+060) 9898980098</p>
                                    <p>(+060) 8898880088</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-white shadow-md rounded h-100 p-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon text-primary mt-4"> <i className="fas fa-envelope" /> </div>
                                    <h3>Business Inquiries</h3>
                                    <p>info@payyed.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-4">
                            <div className="text-center py-5 px-2">
                                <h2 className="text-8">Get in touch</h2>
                                <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <div className="d-flex flex-column">
                                    <ul className="social-icons social-icons-lg social-icons-colored justify-content-center">
                                        <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title data-original-title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                                        <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title data-original-title="Twitter"><i className="fab fa-twitter" /></a></li>
                                        <li className="social-icons-google"><a data-toggle="tooltip" href="http://www.google.com/" target="_blank" title data-original-title="Google"><i className="fab fa-google" /></a></li>
                                        <li className="social-icons-linkedin"><a data-toggle="tooltip" href="http://www.linkedin.com/" target="_blank" title data-original-title="Linkedin"><i className="fab fa-linkedin-in" /></a></li>
                                        <li className="social-icons-youtube"><a data-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title data-original-title="Youtube"><i className="fab fa-youtube" /></a></li>
                                        <li className="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title data-original-title="Instagram"><i className="fab fa-instagram" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="hero-wrap section shadow-md">
                    <div className="hero-mask opacity-9 bg-primary" />
                    <div className="hero-bg" style={{ backgroundImage: 'url("images/bg/image-2.jpg")' }} />
                    <div className="hero-content">
                        <div className="container text-center">
                            <h2 className="text-9 text-white">Awesome Customer Support</h2>
                            <p className="text-4 text-white mb-4">Have you any query? Don't worry. We have great people ready to help you whenever you need it.</p>
                            <a href="#" className="btn btn-light">Find out more</a> </div>
                    </div>
                </section>
            </div></div>
    );
}
export default ContactUs
