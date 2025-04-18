import React from 'react';

function SingleBlog(props) {
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
                                        <h2>Blog Single</h2>
                                        <p>
                                            Home<span>-</span>Blog Single
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb start*/}
                {/*================Blog Area =================*/}
                <section className="blog_area single-post-area section_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 posts-list">
                                <div className="single-post">
                                    <div className="feature-img">
                                        <img
                                            className="img-fluid"
                                            src="img/blog/single_blog_1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="blog_details">
                                        <h2>
                                            Second divided from form fish beast made every of seas all
                                            gathered us saying he our
                                        </h2>
                                        <ul className="blog-info-link mt-3 mb-4">
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-user" /> Travel, Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="far fa-comments" /> 03 Comments
                                                </a>
                                            </li>
                                        </ul>
                                        <p className="excert">
                                            MCSE boot camps have its supporters and its detractors. Some
                                            people do not understand why you should have to spend money on
                                            boot camp when you can get the MCSE study materials yourself at
                                            a fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some
                                            people do not understand why you should have to spend money on
                                            boot camp when you can get the MCSE study materials yourself at
                                            a fraction of the camp price. However, who has the willpower to
                                            actually sit through a self-imposed MCSE training. who has the
                                            willpower to actually
                                        </p>
                                        <div className="quote-wrapper">
                                            <div className="quotes">
                                                MCSE boot camps have its supporters and its detractors. Some
                                                people do not understand why you should have to spend money on
                                                boot camp when you can get the MCSE study materials yourself
                                                at a fraction of the camp price. However, who has the
                                                willpower to actually sit through a self-imposed MCSE
                                                training.
                                            </div>
                                        </div>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some
                                            people do not understand why you should have to spend money on
                                            boot camp when you can get the MCSE study materials yourself at
                                            a fraction of the camp price. However, who has the willpower
                                        </p>
                                        <p>
                                            MCSE boot camps have its supporters and its detractors. Some
                                            people do not understand why you should have to spend money on
                                            boot camp when you can get the MCSE study materials yourself at
                                            a fraction of the camp price. However, who has the willpower to
                                            actually sit through a self-imposed MCSE training. who has the
                                            willpower to actually
                                        </p>
                                    </div>
                                </div>
                                <div className="navigation-top">
                                    <div className="d-sm-flex justify-content-between text-center">
                                        <p className="like-info">
                <span className="align-middle">
                  <i className="far fa-heart" />
                </span>{" "}
                                            Lily and 4 people like this
                                        </p>
                                        <div className="col-sm-4 text-center my-2 my-sm-0">
                                            {/* <p class="comment-count"><span class="align-middle"><i class="far fa-comment"></i></span> 06 Comments</p> */}
                                        </div>
                                        <ul className="social-icons">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-dribbble" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-behance" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="navigation-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid"
                                                            src="img/post/preview.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="arrow">
                                                    <a href="#">
                                                        <span className="lnr text-white ti-arrow-left" />
                                                    </a>
                                                </div>
                                                <div className="detials">
                                                    <p>Prev Post</p>
                                                    <a href="#">
                                                        <h4>Space The Final Frontier</h4>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                                                <div className="detials">
                                                    <p>Next Post</p>
                                                    <a href="#">
                                                        <h4>Telescopes 101</h4>
                                                    </a>
                                                </div>
                                                <div className="arrow">
                                                    <a href="#">
                                                        <span className="lnr text-white ti-arrow-right" />
                                                    </a>
                                                </div>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img
                                                            className="img-fluid"
                                                            src="img/post/next.png"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-author">
                                    <div className="media align-items-center">
                                        <img src="img/blog/author.png" alt="" />
                                        <div className="media-body">
                                            <a href="#">
                                                <h4>Harvard milan</h4>
                                            </a>
                                            <p>
                                                Second divided from form fish beast made. Every of seas all
                                                gathered use saying you're, he our dominion twon Second
                                                divided from
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <h4>05 Comments</h4>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/comment/comment_1.png" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open
                                                        subdue female fill which them Blessed, give fill lesser
                                                        bearing multiply sea night grass fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">
                                                                reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/comment/comment_2.png" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open
                                                        subdue female fill which them Blessed, give fill lesser
                                                        bearing multiply sea night grass fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">
                                                                reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-list">
                                        <div className="single-comment justify-content-between d-flex">
                                            <div className="user justify-content-between d-flex">
                                                <div className="thumb">
                                                    <img src="img/comment/comment_3.png" alt="" />
                                                </div>
                                                <div className="desc">
                                                    <p className="comment">
                                                        Multiply sea night grass fourth day sea lesser rule open
                                                        subdue female fill which them Blessed, give fill lesser
                                                        bearing multiply sea night grass fourth day sea lesser
                                                    </p>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <h5>
                                                                <a href="#">Emilly Blunt</a>
                                                            </h5>
                                                            <p className="date">December 4, 2017 at 3:12 pm </p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <a href="#" className="btn-reply text-uppercase">
                                                                reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h4>Leave a Reply</h4>
                                    <form
                                        className="form-contact comment_form"
                                        action="#"
                                        id="commentForm"
                                    >
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                    <textarea
                        className="form-control w-100"
                        name="comment"
                        id="comment"
                        cols={30}
                        rows={9}
                        placeholder="Write Comment"
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
                                                        placeholder="Name"
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
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input
                                                        className="form-control"
                                                        name="website"
                                                        id="website"
                                                        type="text"
                                                        placeholder="Website"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="button btn_1 button-contactForm"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="blog_right_sidebar">
                                    <aside className="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Search Keyword"
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'Search Keyword'"
                                                    />
                                                    <div className="input-group-append">
                                                        <button className="btn" type="button">
                                                            <i className="ti-search" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                className="button rounded-0 primary-bg text-white w-100 btn_1"
                                                type="submit"
                                            >
                                                Search
                                            </button>
                                        </form>
                                    </aside>
                                    <aside className="single_sidebar_widget post_category_widget">
                                        <h4 className="widget_title">Category</h4>
                                        <ul className="list cat-list">
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Resaurant food</p>
                                                    <p>(37)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Travel news</p>
                                                    <p>(10)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Modern technology</p>
                                                    <p>(03)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Product</p>
                                                    <p>(11)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Inspiration</p>
                                                    <p>(21)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="d-flex">
                                                    <p>Health Care</p>
                                                    <p>(21)</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget popular_post_widget">
                                        <h3 className="widget_title">Recent Post</h3>
                                        <div className="media post_item">
                                            <img src="img/post/post_1.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>From life was you fish...</h3>
                                                </a>
                                                <p>January 12, 2019</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/post/post_2.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>The Amazing Hubble</h3>
                                                </a>
                                                <p>02 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/post/post_3.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>Astronomy Or Astrology</h3>
                                                </a>
                                                <p>03 Hours ago</p>
                                            </div>
                                        </div>
                                        <div className="media post_item">
                                            <img src="img/post/post_4.png" alt="post" />
                                            <div className="media-body">
                                                <a href="single-blog.html">
                                                    <h3>Asteroids telescope</h3>
                                                </a>
                                                <p>01 Hours ago</p>
                                            </div>
                                        </div>
                                    </aside>
                                    <aside className="single_sidebar_widget tag_cloud_widget">
                                        <h4 className="widget_title">Tag Clouds</h4>
                                        <ul className="list">
                                            <li>
                                                <a href="#">project</a>
                                            </li>
                                            <li>
                                                <a href="#">love</a>
                                            </li>
                                            <li>
                                                <a href="#">technology</a>
                                            </li>
                                            <li>
                                                <a href="#">travel</a>
                                            </li>
                                            <li>
                                                <a href="#">restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">life style</a>
                                            </li>
                                            <li>
                                                <a href="#">design</a>
                                            </li>
                                            <li>
                                                <a href="#">illustration</a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget instagram_feeds">
                                        <h4 className="widget_title">Instagram Feeds</h4>
                                        <ul className="instagram_row flex-wrap">
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_5.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_6.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_7.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_8.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_9.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        className="img-fluid"
                                                        src="img/post/post_10.png"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="single_sidebar_widget newsletter_widget">
                                        <h4 className="widget_title">Newsletter</h4>
                                        <form action="#">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email'"
                                                    placeholder="Enter email"
                                                    required=""
                                                />
                                            </div>
                                            <button
                                                className="button rounded-0 primary-bg text-white w-100 btn_1"
                                                type="submit"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*================Blog Area end =================*/}
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

export default SingleBlog;
