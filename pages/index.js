import React from 'react'
import Link from "next/link";


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
                                                <Link href="https://forms.gle/7QHD8P88k214WQ1d6" target='_blank'
                                                      className="btn_1">
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
                        <div className="d-lg-none canva-wrapper">
                            <div className="video-container">
                                <video height="auto" controls poster="/assets/img/video_thumbnail.jpeg">
                                    <source src="/assets/video/intro.mp4"
                                            type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            {/*<DotLottieReact*/}
                            {/*    src="https://lottie.host/889006d3-fa1c-4cc7-ae48-6a91cdaee7db/BPbnMkkqEL.lottie"*/}
                            {/*    loop*/}
                            {/*    autoplay*/}
                            {/*/>*/}
                        </div>
                        <div className="row align-items-center flex-nowrap pt-lg-0 pt-4">
                            <div className="col-lg-6 col-xl-6">
                                <div className="banner_text">
                                    <div className="banner_text_iner">
                                        <h5>Every Child Yearns to Learn</h5>
                                        <h1>Making Your Child’s World Better</h1>
                                        <p>
                                            To ignite curiosity, creativity, and confidence in every child by providing
                                            inspiring STEM education —
                                            empowering the next generation of innovators, problem-solvers, and
                                            changemakers from every corner of the nation.
                                            By making STEM education <strong>accessible, engaging, and
                                            practical, </strong>we’re shaping a future where no child is left behind.
                                        </p>
                                        <a href="https://forms.gle/7QHD8P88k214WQ1d6" target='_blank' className="btn_1">
                                            View Course{" "}
                                        </a>
                                        <a href="https://forms.gle/7QHD8P88k214WQ1d6" target='_blank' className="btn_2">
                                            Get Started{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className=" d-none d-lg-block canva-wrapper">
                                <div className="video-container">
                                    <video height="auto" controls poster="/assets/img/video_thumbnail.jpeg">
                                        <source src="/assets/video/intro.mp4" type="video/mp4"/>
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
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
                                        Our platform is packed with exciting features — colorful lessons,
                                        interactive quizzes, fun animations, and progress tracking.
                                    </p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-xl-3">
                                <div className="single_feature">
                                    <div className="single_feature_part mt-0">
          <span className="single_feature_icon">
            <i className="fas fa-layer-group"></i>
          </span>
                                        <h4>Better Future</h4>
                                        <p>
                                            We help young minds grow strong today, so they can build a bright tomorrow.
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
                                            Caring teachers who know how to make every lesson fun and easy to
                                            understand.
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
                                        <h4>Creative Learning</h4>
                                        <p>
                                            Hands-on activities, stories, and games that spark imagination and make
                                            learning fun!
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
                                        We believe the best learning happens with a smile. Our lessons are filled with warmth, joy,
                                        and creativity — helping children grow not just in knowledge, but in kindness and confidence too.
                                    </p>
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
                                    <span className="counter">10+</span>
                                    <h4>Passionate Teachers</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_member_counter">
                                    <span className="counter">50+</span>
                                    <h4>Happy Students</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_member_counter">
                                    <span className="counter">30+</span>
                                    <h4>Online Explorers</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single_member_counter">
                                    <span className="counter">20+</span>
                                    <h4>Classroom Stars</h4>
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
                                        src="/assets/img/electronics_poster.jpeg"
                                        className="special_img"
                                        alt=""
                                    />
                                    <div className="special_cource_text">
                                        <a href="https://forms.gle/7QHD8P88k214WQ1d6" target='_blank' className="btn_4">
                                            STEM
                                        </a>
                                        <h4>₹999.00</h4>
                                        <a href="https://forms.gle/7QHD8P88k214WQ1d6" target='_blank'>
                                            <h3>Electronics</h3>
                                        </a>
                                        <p className='mb-0'>
                                            From building simple circuits to understanding how gadgets work,
                                            we spark young minds to explore,
                                            create, and innovate with hands-on experiments and fun learning.
                                        </p>
                                        <div className="author_info d-none">
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
                                        A smarter way to learn!
                                        We’ve built a powerful, child-friendly learning system that blends creativity with technology.
                                        With interactive lessons, personalized feedback,
                                        and supportive teachers, every child can thrive — at their own pace and in their own style.
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-6 col-md-12 col-lg-6">
                                            <div className="learning_member_text_iner">
                                                <span className="fa-solid fa-pencil"/>
                                                <h4>Learn Anywhere</h4>
                                                <p>
                                                    No matter where you are, learning is always within reach.
                                                    Our platform lets students access fun, engaging lessons anytime —
                                                    from home, school, or even on the go.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-12 col-lg-6">
                                            <div className="learning_member_text_iner">
                                                <span className="fa-solid fa-stamp"/>
                                                <h4>Expert Teacher</h4>
                                                <p>
                                                    Guidance from the best.
                                                    Our experienced educators don’t just teach — they inspire. With a warm approach and deep knowledge,
                                                    they make every topic easy to understand and fun to explore.
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
                <section className="testimonial_part d-none">
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
                <section className="blog_part section_padding d-none">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5">
                                <div className="section_tittle text-center">
                                    <p>Our Blog</p>
                                    <h2>Popular Blog</h2>
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
                                        By making STEM education <strong>accessible, engaging, and
                                        practical, </strong>we’re shaping a future where no child is left behind.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-xl-4">
                                <div className="single-footer-widget footer_2">
                                    <h4>Newsletter</h4>
                                    <p>
                                        Be the first to know about new programs, fun activities, and helpful tips for your child's growth. Sign up now and stay connected!
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
                                            <span> Address :</span> Ramanathapuram, Tamilnadu
                                        </p>
                                        <p>
                                            <span> Phone :</span> +91 9585802453
                                        </p>
                                        <p>
                                            <span> Email : </span>contact.youngnova@gmail.com
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
                                                Copyright © All rights reserved | YoungNova
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>


        </React.Fragment>
    );
}
