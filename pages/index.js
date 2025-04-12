import React from 'react'
import Link from "next/link";
import {DotLottieReact} from '@lottiefiles/dotlottie-react';


export default function Home() {
  return (
      <React.Fragment>
        <>
          <header className="main_menu home_menu">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" href='/'>
                      <img src="/assets/img/logo.png" width={120} alt="logo"/>
                    </Link>
                    <button
                        className="btn_1 mt-0 d-block d-lg-none"
                        type="button"
                    >
                      Contact us
                    </button>
                    <div
                        className="collapse navbar-collapse main-menu-item justify-content-end"
                        id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav align-items-center">
                        <li className="nav-item active">
                          <Link href="/" className="nav-link">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/about" className="nav-link">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/cource" className="nav-link">
                            Courses
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/blog" className="nav-link">
                            Blog
                          </Link>
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
                          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                          </div>
                        </li>
                        <li className="nav-item">
                          <Link href="/contact" className="nav-link">
                            Contact
                          </Link>
                        </li>
                        <li className="d-none d-lg-block">
                          <Link href="/" className="btn_1">
                            Get a Quote
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* Header part end*/}
          {/* banner part start*/}
          <section className="banner_part">
            <div className="container">
              <div className="col d-lg-none canva-wrapper">
                <DotLottieReact
                    src="https://lottie.host/889006d3-fa1c-4cc7-ae48-6a91cdaee7db/BPbnMkkqEL.lottie"
                    loop
                    autoplay
                />
              </div>
              <div className="row align-items-center flex-nowrap">
                <div className="col-lg-6 col-xl-6">
                  <div className="banner_text">
                    <div className="banner_text_iner">
                      <h5>Every child yearns to learn</h5>
                      <h1>Making Your Childs World Better</h1>
                      <p>
                        Replenish seasons may male hath fruit beast were seas saw you
                        arrie said man beast whales his void unto last session for bite.
                        Set have great you'll male grass yielding yielding man
                      </p>
                      <a href="#" className="btn_1">
                        View Course{" "}
                      </a>
                      <a href="#" className="btn_2">
                        Get Started{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col d-none d-lg-block canva-wrapper">
                  <DotLottieReact
                      src="https://lottie.host/889006d3-fa1c-4cc7-ae48-6a91cdaee7db/BPbnMkkqEL.lottie"
                      loop
                      autoplay
                  />
                </div>
              </div>
            </div>
          </section>
          {/* banner part start*/}
          {/* feature_part start*/}
          <section className="feature_part">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-xl-3 align-self-center">
                  <div className="single_feature_text ">
                    <h2>
                      Awesome <br/> Feature
                    </h2>
                    <p>
                      Set have great you male grass yielding an yielding first their
                      you're have called the abundantly fruit were man{" "}
                    </p>
                    <a href="#" className="btn_1">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                  <div className="single_feature">
                    <div className="single_feature_part">
          <span className="single_feature_icon">
            <i className="fas fa-layer-group"></i>
          </span>
                      <h4>Better Future</h4>
                      <p>
                        Set have great you male grasses yielding yielding first their to
                        called deep abundantly Set have great you male
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                  <div className="single_feature">
                    <div className="single_feature_part">
          <span className="single_feature_icon">
            <i className="fas fa-external-link-alt"></i>
          </span>
                      <h4>Qualified Trainers</h4>
                      <p>
                        Set have great you male grasses yielding yielding first their to
                        called deep abundantly Set have great you male
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-xl-3">
                  <div className="single_feature">
                    <div className="single_feature_part single_feature_part_2">
          <span className="single_service_icon style_icon">
            <i className="fas fa-lightbulb"></i>
          </span>
                      <h4>Job Opportunity</h4>
                      <p>
                        Set have great you male grasses yielding yielding first their to
                        called deep abundantly Set have great you male
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* upcoming_event part start*/}
          {/* learning part start*/}
          <section className="learning_part">
            <div className="container">
              <div className="row align-items-sm-center align-items-lg-stretch">
                <div className="col-md-7 col-lg-7">
                  <div className="learning_img">
                    <img src="/assets/img/learning_img.png" alt=""/>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5">
                  <div className="learning_member_text">
                    <h5>About us</h5>
                    <h2>Learning with Love and Laughter</h2>
                    <p>
                      Fifth saying upon divide divide rule for deep their female all
                      hath brind Days and beast greater grass signs abundantly have
                      greater also days years under brought moveth.
                    </p>
                    <ul>
                      <li>
                        <span className="ti-pencil-alt"/>
                        Him lights given i heaven second yielding seas gathered wear
                      </li>
                      <li>
                        <span className="ti-ruler-pencil"/>
                        Fly female them whales fly them day deep given night.
                      </li>
                    </ul>
                    <a href="#" className="btn_1">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* learning part end*/}
          {/* member_counter counter start */}
          <section className="member_counter">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="single_member_counter">
                    <span className="counter">1024</span>
                    <h4>All Teachers</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_member_counter">
                    <span className="counter">960</span>
                    <h4> All Students</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_member_counter">
                    <span className="counter">1020</span>
                    <h4>Online Students</h4>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_member_counter">
                    <span className="counter">820</span>
                    <h4>Ofline Students</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* member_counter counter end */}
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
                        src="/assets/img/special_cource_1.png"
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
                          <img src="/assets/img/author/author_1.png" alt=""/>
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
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/star.svg" alt=""/>
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
                        src="/assets/img/special_cource_2.png"
                        className="special_img"
                        alt=""
                    />
                    <div className="special_cource_text">
                      <a href="course-details.html" className="btn_4">
                        design
                      </a>
                      <h4>$160.00</h4>
                      <a href="course-details.html">
                        {" "}
                        <h3>Web UX/UI Design </h3>
                      </a>
                      <p>
                        Which whose darkness saying were life unto fish wherein all fish
                        of together called
                      </p>
                      <div className="author_info">
                        <div className="author_img">
                          <img src="/assets/img/author/author_2.png" alt=""/>
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
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/star.svg" alt=""/>
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
                        src="/assets/img/special_cource_3.png"
                        className="special_img"
                        alt=""
                    />
                    <div className="special_cource_text">
                      <a href="course-details.html" className="btn_4">
                        Wordpress
                      </a>
                      <h4>$140.00</h4>
                      <a href="course-details.html">
                        {" "}
                        <h3>Wordpress Development</h3>{" "}
                      </a>
                      <p>
                        Which whose darkness saying were life unto fish wherein all fish
                        of together called
                      </p>
                      <div className="author_info">
                        <div className="author_img">
                          <img src="/assets/img/author/author_3.png" alt=""/>
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
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/color_star.svg" alt=""/>
                            </a>
                            <a href="#">
                              <img src="/assets/img/icon/star.svg" alt=""/>
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
          {/* learning part start*/}
          <section className="advance_feature learning_part">
            <div className="container">
              <div className="row align-items-sm-center align-items-xl-stretch">
                <div className="col-md-6 col-lg-6">
                  <div className="learning_member_text">
                    <h5>Advance feature</h5>
                    <h2>Our Advance Educator Learning System</h2>
                    <p>
                      Fifth saying upon divide divide rule for deep their female all
                      hath brind mid Days and beast greater grass signs abundantly have
                      greater also use over face earth days years under brought moveth
                      she star
                    </p>
                    <div className="row">
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="learning_member_text_iner">
                          <span className="ti-pencil-alt"/>
                          <h4>Learn Anywhere</h4>
                          <p>
                            There earth face earth behold she star so made void two
                            given and also our
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-12 col-lg-6">
                        <div className="learning_member_text_iner">
                          <span className="ti-stamp"/>
                          <h4>Expert Teacher</h4>
                          <p>
                            There earth face earth behold she star so made void two
                            given and also our
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="learning_img">
                    <img src="/assets/img/advance_feature_img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* learning part end*/}
          {/*::review_part start::*/}
          <section className="testimonial_part">
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
                            <img src="/assets/img/testimonial_img_1.png" alt="#"/>
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
                            <img src="/assets/img/testimonial_img_1.png" alt="#"/>
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
                            <img src="/assets/img/testimonial_img_2.png" alt="#"/>
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
                            <img src="/assets/img/testimonial_img_1.png" alt="#"/>
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
                            <img src="/assets/img/testimonial_img_3.png" alt="#"/>
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
                            <img src="/assets/img/testimonial_img_1.png" alt="#"/>
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
          {/*::blog_part start::*/}
          <section className="blog_part section_padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-5">
                  <div className="section_tittle text-center">
                    <p>Our Blog</p>
                    <h2>Students Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-4">
                  <div className="single-home-blog">
                    <div className="card">
                      <img
                          src="/assets/img/blog/blog_1.png"
                          className="card-img-top"
                          alt="blog"
                      />
                      <div className="card-body">
                        <a href="#" className="btn_4">
                          Design
                        </a>
                        <a href="blog.html">
                          <h5 className="card-title">Dry beginning sea over tree</h5>
                        </a>
                        <p>
                          Which whose darkness saying were life unto fish wherein all
                          fish of together called
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <span className="ti-comments"/>2 Comments
                          </li>
                          <li>
                            {" "}
                            <span className="ti-heart"/>
                            2k Like
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                  <div className="single-home-blog">
                    <div className="card">
                      <img
                          src="/assets/img/blog/blog_2.png"
                          className="card-img-top"
                          alt="blog"
                      />
                      <div className="card-body">
                        <a href="#" className="btn_4">
                          Developing
                        </a>
                        <a href="blog.html">
                          <h5 className="card-title">All beginning air two likeness</h5>
                        </a>
                        <p>
                          Which whose darkness saying were life unto fish wherein all
                          fish of together called
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <span className="ti-comments"/>2 Comments
                          </li>
                          <li>
                            {" "}
                            <span className="ti-heart"/>
                            2k Like
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4">
                  <div className="single-home-blog">
                    <div className="card">
                      <img
                          src="/assets/img/blog/blog_3.png"
                          className="card-img-top"
                          alt="blog"
                      />
                      <div className="card-body">
                        <a href="#" className="btn_4">
                          Design
                        </a>
                        <a href="blog.html">
                          <h5 className="card-title">Form day seasons sea hand</h5>
                        </a>
                        <p>
                          Which whose darkness saying were life unto fish wherein all
                          fish of together called
                        </p>
                        <ul>
                          <li>
                            {" "}
                            <span className="ti-comments"/>2 Comments
                          </li>
                          <li>
                            {" "}
                            <span className="ti-heart"/>
                            2k Like
                          </li>
                        </ul>
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
                      <img src="/assets/img/logo.png" alt=""/>{" "}
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
                              <i className="ti-angle-right"/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="social_icon">
                      <a href="#">
                        {" "}
                        <i className="ti-facebook"/>{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="ti-twitter-alt"/>{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="ti-instagram"/>{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="ti-skype"/>{" "}
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
                          <i className="ti-heart" aria-hidden="true"/> by{" "}
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


      </React.Fragment>
  );
}
