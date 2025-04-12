import React from 'react';

function Contact(props) {
    return (
        <div>
            <>
                {/*::header part start::*/}
                <header className="main_menu single_page_menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <a className="navbar-brand logo_1" href="index.html">
                                        {" "}
                                        <img src="/assets/img/single_page_logo.png" alt="logo" />{" "}
                                    </a>
                                    <a className="navbar-brand logo_2" href="index.html">
                                        {" "}
                                        <img src="/assets/img/logo.png" alt="logo" />{" "}
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div
                                        className="collapse navbar-collapse main-menu-item justify-content-end"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav align-items-center">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="index.html">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="about.html">
                                                    About
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="cource.html">
                                                    Courses
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="blog.html">
                                                    Blog
                                                </a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a
                                                    className="nav-link dropdown-toggle"
                                                    href="blog.html"
                                                    id="navbarDropdown"
                                                    role="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Pages
                                                </a>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarDropdown"
                                                >
                                                    <a className="dropdown-item" href="single-blog.html">
                                                        Single blog
                                                    </a>
                                                    <a className="dropdown-item" href="elements.html">
                                                        Elements
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="contact.html">
                                                    Contact
                                                </a>
                                            </li>
                                            <li className="d-none d-lg-block">
                                                <a className="btn_1" href="#">
                                                    Get a Quote
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header part end*/}
                {/* breadcrumb start*/}
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner text-center">
                                    <div className="breadcrumb_iner_item">
                                        <h2>Contact us</h2>
                                        <p>
                                            Home
                                            <span>
                  /<span>Contact us</span>
                </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb start*/}
                {/* ================ contact section start ================= */}
                <section className="contact-section section_padding">
                    <div className="container">
                        <div className="d-none d-sm-block mb-5 pb-4">
                            <div id="map" style={{ height: 480 }} />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form
                                    className="form-contact contact_form"
                                    action="contact_process.php"
                                    method="post"
                                    id="contactForm"
                                    noValidate="novalidate"
                                >
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                  <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      onfocus="this.placeholder = ''"
                      onblur="this.placeholder = 'Enter Message'"
                      placeholder="Enter Message"
                      defaultValue={""}
                  />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    type="text"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter your name'"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email address'"
                                                    placeholder="Enter email address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    type="text"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter Subject'"
                                                    placeholder="Enter Subject"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm btn_1">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
                                    <div className="media-body">
                                        <h3>00 (440) 9865 562</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ================ contact section end ================= */}
                {/* footer part start*/}
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-4 col-xl-3">
                                <div className="single-footer-widget footer_1">
                                    <a href="index.html">
                                        {" "}
                                        <img src="/assets/img/logo.png" alt="" />{" "}
                                    </a>
                                    <p>
                                        But when shot real her. Chamber her one visite removal six sending
                                        himself boys scot exquisite existend an{" "}
                                    </p>
                                    <p>But when shot real her hamber her </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Newsletter</h4>
                                    <p>
                                        Stay updated with our latest trends Seed heaven so said place
                                        winged over given forth fruit.
                                    </p>
                                    <form action="#">
                                        <div className="form-group">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email address'"
                                                />
                                                <div className="input-group-append">
                                                    <button className="btn btn_1" type="button">
                                                        <i className="ti-angle-right" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="social_icon">
                                        <a href="#">
                                            {" "}
                                            <i className="ti-facebook" />{" "}
                                        </a>
                                        <a href="#">
                                            {" "}
                                            <i className="ti-twitter-alt" />{" "}
                                        </a>
                                        <a href="#">
                                            {" "}
                                            <i className="ti-instagram" />{" "}
                                        </a>
                                        <a href="#">
                                            {" "}
                                            <i className="ti-skype" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-md-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Contact us</h4>
                                    <div className="contact_info">
                                        <p>
                                            <span> Address :</span> Hath of it fly signs bear be one blessed
                                            after{" "}
                                        </p>
                                        <p>
                                            <span> Phone :</span> +2 36 265 (8060)
                                        </p>
                                        <p>
                                            <span> Email : </span>info@colorlib.com{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright_part_text text-center">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p className="footer-text m-0">
                                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                                Copyright © All rights reserved | This template is made with{" "}
                                                <i className="ti-heart" aria-hidden="true" /> by{" "}
                                                <a href="https://colorlib.com" target="_blank">
                                                    Colorlib
                                                </a>
                                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>

        </div>
    );
}

export default Contact;
