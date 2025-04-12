import React from 'react';

function Course(props) {
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
                                        <img src="img/single_page_logo.png" alt="logo" />{" "}
                                    </a>
                                    <a className="navbar-brand logo_2" href="index.html">
                                        {" "}
                                        <img src="img/logo.png" alt="logo" />{" "}
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
                                        <h2>Our Courses</h2>
                                        <p>
                                            Home<span>/</span>Courses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb start*/}
                {/*::review_part start::*/}
                <section className="special_cource padding_top">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5">
                                <div className="section_tittle text-center">
                                    <p>popular courses</p>
                                    <h2>Special Courses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                <div className="single_special_cource">
                                    <img
                                        src="img/special_cource_1.png"
                                        className="special_img"
                                        alt=""
                                    />
                                    <div className="special_cource_text">
                                        <a href="course-details.html" className="btn_4">
                                            Web Development
                                        </a>
                                        <h4>$130.00</h4>
                                        <a href="course-details.html">
                                            <h3>Web Development</h3>
                                        </a>
                                        <p>
                                            Which whose darkness saying were life unto fish wherein all fish
                                            of together called
                                        </p>
                                        <div className="author_info">
                                            <div className="author_img">
                                                <img src="img/author/author_1.png" alt="" />
                                                <div className="author_info_text">
                                                    <p>Conduct by:</p>
                                                    <h5>
                                                        <a href="#">James Well</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="author_rating">
                                                <div className="rating">
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/star.svg" alt="" />
                                                    </a>
                                                </div>
                                                <p>3.8 Ratings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="single_special_cource">
                                    <img
                                        src="img/special_cource_2.png"
                                        className="special_img"
                                        alt=""
                                    />
                                    <div className="special_cource_text">
                                        <a href="course-details.html" className="btn_4">
                                            design
                                        </a>
                                        <h4>$160.00</h4>
                                        <a href="course-details.html">
                                            <h3>Web UX/UI Design </h3>
                                        </a>
                                        <p>
                                            Which whose darkness saying were life unto fish wherein all fish
                                            of together called
                                        </p>
                                        <div className="author_info">
                                            <div className="author_img">
                                                <img src="img/author/author_2.png" alt="" />
                                                <div className="author_info_text">
                                                    <p>Conduct by:</p>
                                                    <h5>
                                                        <a href="#">James Well</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="author_rating">
                                                <div className="rating">
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/star.svg" alt="" />
                                                    </a>
                                                </div>
                                                <p>3.8 Ratings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="single_special_cource">
                                    <img
                                        src="img/special_cource_3.png"
                                        className="special_img"
                                        alt=""
                                    />
                                    <div className="special_cource_text">
                                        <a href="course-details.html" className="btn_4">
                                            Wordpress
                                        </a>
                                        <h4>$140.00</h4>
                                        <a href="course-details.html">
                                            <h3>Wordpress Development</h3>
                                        </a>
                                        <p>
                                            Which whose darkness saying were life unto fish wherein all fish
                                            of together called
                                        </p>
                                        <div className="author_info">
                                            <div className="author_img">
                                                <img src="img/author/author_3.png" alt="" />
                                                <div className="author_info_text">
                                                    <p>Conduct by:</p>
                                                    <h5>
                                                        <a href="#">James Well</a>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="author_rating">
                                                <div className="rating">
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/color_star.svg" alt="" />
                                                    </a>
                                                    <a href="#">
                                                        <img src="img/icon/star.svg" alt="" />
                                                    </a>
                                                </div>
                                                <p>3.8 Ratings</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*::blog_part end::*/}
                {/*::review_part start::*/}
                <section className="testimonial_part section_padding">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-xl-5">
                                <div className="section_tittle text-center">
                                    <p>tesimonials</p>
                                    <h2>Happy Students</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="textimonial_iner owl-carousel">
                                    <div className="testimonial_slider">
                                        <div className="row">
                                            <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xl-2 col-sm-4">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 d-none d-xl-block">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 d-none d-xl-block">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_slider">
                                        <div className="row">
                                            <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xl-2 col-sm-4">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 d-none d-xl-block">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 d-none d-xl-block">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial_slider">
                                        <div className="row">
                                            <div className="col-lg-8 col-xl-4 col-sm-8 align-self-center">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-xl-2 col-sm-4">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 d-none d-xl-block">
                                                <div className="testimonial_slider_text">
                                                    <p>
                                                        Behold place was a multiply creeping creature his domin to
                                                        thiren open void hath herb divided divide creepeth living
                                                        shall i call beginning third sea itself set
                                                    </p>
                                                    <h4>Michel Hashale</h4>
                                                    <h5> Sr. Web designer</h5>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 d-none d-xl-block">
                                                <div className="testimonial_slider_img">
                                                    <img src="img/testimonial_img_1.png" alt="#" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*::blog_part end::*/}
                {/* footer part start*/}
                <footer className="footer-area">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-6 col-md-4 col-xl-3">
                                <div className="single-footer-widget footer_1">
                                    <a href="index.html">
                                        {" "}
                                        <img src="img/logo.png" alt="" />{" "}
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
                {/* footer part end*/}
                {/* jquery plugins here*/}
                {/* jquery */}
                {/* popper js */}
                {/* bootstrap js */}
                {/* easing js */}
                {/* swiper js */}
                {/* swiper js */}
                {/* particles js */}
                {/* swiper js */}
                {/* custom js */}
            </>

        </div>
    );
}

export default Course;
