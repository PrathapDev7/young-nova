import React from 'react';

function CourseDetails(props) {
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
                                        <h2>Course Details</h2>
                                        <p>
                                            Home<span>/</span>Course Details
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb start*/}
                {/*================ Start Course Details Area =================*/}
                <section className="course_details_area section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 course_details_left">
                                <div className="main_image">
                                    <img className="img-fluid" src="img/single_cource.png" alt="" />
                                </div>
                                <div className="content_wrapper">
                                    <h4 className="title_top">Objectives</h4>
                                    <div className="content">
                                        When you enter into any new area of science, you almost always
                                        find yourself with a baffling new language of technical terms to
                                        learn before you can converse with the experts. This is certainly
                                        true in astronomy both in terms of terms that refer to the cosmos
                                        and terms that describe the tools of the trade, the most prevalent
                                        being the telescope.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor
                                        sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum.
                                    </div>
                                    <h4 className="title">Eligibility</h4>
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum.
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum. Lorem ipsum dolor
                                        sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum.
                                    </div>
                                    <h4 className="title">Course Outline</h4>
                                    <div className="content">
                                        <ul className="course_list">
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Introduction Lesson</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Basics of HTML</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Getting Know about HTML</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Tags and Attributes</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Basics of CSS</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Getting Familiar with CSS</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Introduction to Bootstrap</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Responsive Design</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                            <li className="justify-content-between align-items-center d-flex">
                                                <p>Canvas in HTML 5</p>
                                                <a className="btn_2 text-uppercase" href="#">
                                                    View Details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 right-contents">
                                <div className="sidebar_top">
                                    <ul>
                                        <li>
                                            <a className="justify-content-between d-flex" href="#">
                                                <p>Trainer’s Name</p>
                                                <span className="color">George Mathews</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="justify-content-between d-flex" href="#">
                                                <p>Course Fee </p>
                                                <span>$230</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="justify-content-between d-flex" href="#">
                                                <p>Available Seats </p>
                                                <span>15</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="justify-content-between d-flex" href="#">
                                                <p>Schedule </p>
                                                <span>2.00 pm to 4.00 pm</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn_1 d-block">
                                        Enroll the course
                                    </a>
                                </div>
                                <h4 className="title">Reviews</h4>
                                <div className="content">
                                    <div className="review-top row pt-40">
                                        <div className="col-lg-12">
                                            <h6 className="mb-15">Provide Your Rating</h6>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Quality</span>
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
                                                <span>Outstanding</span>
                                            </div>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Puncuality</span>
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
                                                <span>Outstanding</span>
                                            </div>
                                            <div className="d-flex flex-row reviews justify-content-between">
                                                <span>Quality</span>
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
                                                <span>Outstanding</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feedeback">
                                        <h6>Your Feedback</h6>
                                        <textarea
                                            name="feedback"
                                            className="form-control"
                                            cols={10}
                                            rows={10}
                                            defaultValue={""}
                                        />
                                        <div className="mt-10 text-right">
                                            <a href="#" className="btn_1">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                    <div className="comments-area mb-30">
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src="img/cource/cource_1.png" alt="" />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">Emilly Blunt</a>
                                                        </h5>
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
                                                        <p className="comment">
                                                            Blessed made of meat doesn't lights doesn't was dominion
                                                            and sea earth form
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src="img/cource/cource_2.png" alt="" />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">Elsie Cunningham</a>
                                                        </h5>
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
                                                        <p className="comment">
                                                            Blessed made of meat doesn't lights doesn't was dominion
                                                            and sea earth form
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-list">
                                            <div className="single-comment single-reviews justify-content-between d-flex">
                                                <div className="user justify-content-between d-flex">
                                                    <div className="thumb">
                                                        <img src="img/cource/cource_3.png" alt="" />
                                                    </div>
                                                    <div className="desc">
                                                        <h5>
                                                            <a href="#">Maria Luna</a>
                                                        </h5>
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
                                                        <p className="comment">
                                                            Blessed made of meat doesn't lights doesn't was dominion
                                                            and sea earth form
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================ End Course Details Area =================*/}
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

export default CourseDetails;
