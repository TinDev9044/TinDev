import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);
//binding so that this can be used
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
      email: '',
      password: '',
      submitted: false,
      User:{}
    }
  }
  onSignUp(){
     const signUpButton = document.getElementById('signUp');
     const signInButton = document.getElementById('signIn');
     const container = document.getElementById('container');
     
    container.classList.add('right-panel-active');

     signInButton.addEventListener('click', () => {
       container.classList.remove('right-panel-active');
     });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => {
        if(res.data.type===200){
        this.setState({
          submitted: true,
          User:res.data.User
        })
        console.log("time for redirect")
      }
      else{
      console.log("Erroorrr after post at return time")
      }
      })
      
  }

  render() {
    if(this.state.submitted===true){
      return(<Redirect to={{
        pathname: '/confirmation',
        state: { User: this.state.User }
    }} />)
    }
    return (
      <div className="register-page">
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent headroom">
    <div className="container">
      <a className="navbar-brand mr-lg-5" href="https://demos.creative-tim.com/index.html">
        <img src="../assets/img/brand/white.png"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a href="https://demos.creative-tim.com/index.html">
                <img src="../assets/img/brand/blue.png"/>
              </a>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
          <li className="nav-item dropdown">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-ui-04 d-lg-none"></i>
              <span className="nav-link-inner--text">Elements</span>
            </a>
            <div className="dropdown-menu dropdown-menu-xl">
              <div className="dropdown-menu-inner">
                <a href="../index.html" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                    <i className="ni ni-spaceship"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Elements</h6>
                    <p className="description d-none d-md-inline-block mb-0">Learn how to use compiling Scss, change brand colors and more.</p>
                  </div>
                </a>
                <a href="../presentation.html" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                    <i className="ni ni-palette"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Presentation</h6>
                    <p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography, icons and the grid system we used for .</p>
                  </div>
                </a>
              </div>
              <div className="dropdown-menu-footer">
                <a className="dropdown-item" href="../docs/1.0/getting-started/overview.html">
                  <i className="ni ni-atom"></i>
                  Getting Started
                </a>
                <a className="dropdown-item" href="../docs/1.0/foundation/colors.html">
                  <i className="ni ni-ui-04"></i>
                  Foundation
                </a>
                <a className="dropdown-item" href="../docs/1.0/components/alerts.html">
                  <i className="ni ni-archive-2"></i>
                  Components
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-app d-lg-none"></i>
              <span className="nav-link-inner--text">Design Blocks</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="../sections.html#headers">
                <i className="ni ni-album-2 text-info"></i>
                Headers
              </a>
              <a className="dropdown-item" href="../sections.html#features">
                <i className="ni ni-settings text-danger"></i>
                Features
              </a>
              <a className="dropdown-item" href="../sections.html#blogs">
                <i className="ni ni-align-left-2 text-primary"></i>
                Blogs
              </a>
              <a className="dropdown-item" href="../sections.html#teams">
                <i className="ni ni-user-run text-danger"></i>
                Teams
              </a>
              <a className="dropdown-item" href="../sections.html#projects">
                <i className="ni ni-paper-diploma text-purple"></i>
                Projects
              </a>
              <a className="dropdown-item" href="../sections.html#pricing">
                <i className="ni ni-money-coins text-pink"></i>
                Pricing
              </a>
              <a className="dropdown-item" href="../sections.html#testimonials">
                <i className="ni ni-chat-round text-muted"></i>
                Testimonials
              </a>
              <a className="dropdown-item" href="../sections.html#contact-us">
                <i className="ni ni-mobile-button text-success"></i>
                Contact Us
              </a>
              <a className="dropdown-item" href="../sections.html#tables">
                <i className="ni ni-chart-bar-32 text-default"></i>
                Tables
              </a>
              <a className="dropdown-item" href="../sections.html#accordion">
                <i className="ni ni-collection text-yellow"></i>
                Accordion
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-single-copy-04 d-lg-none"></i>
              <span className="nav-link-inner--text">Examples</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="about-us.html">
                <i className="ni ni-tie-bow text-warning"></i>
                About-us
              </a>
              <a className="dropdown-item" href="blog-post.html">
                <i className="ni ni-align-center text-info"></i>
                Blog Post
              </a>
              <a className="dropdown-item" href="blog-posts.html">
                <i className="ni ni-chart-bar-32 text-yellow"></i>
                Blog Posts
              </a>
              <a className="dropdown-item" href="contact-us.html">
                <i className="ni ni-square-pin text-danger"></i>
                Contact Us
              </a>
              <a className="dropdown-item" href="landing-page.html">
                <i className="ni ni-planet text-purple"></i>
                Landing Page
              </a>
              <a className="dropdown-item" href="pricing-page.html">
                <i className="ni ni-money-coins text-success"></i>
                Pricing
              </a>
              <a className="dropdown-item" href="ecommerce.html">
                <i className="ni ni-box-2 text-pink"></i>
                Ecommerce Page
              </a>
              <a className="dropdown-item" href="product-page.html">
                <i className="ni ni-bag-17 text-primary"></i>
                Product Page
              </a>
              <a className="dropdown-item" href="profile-page.html">
                <i className="ni ni-circle-08 text-info"></i>
                Profile Page
              </a>
              <a className="dropdown-item" href="error.html">
                <i className="ni ni-button-power text-warning"></i>
                404 Error Page
              </a>
              <a className="dropdown-item" href="500-error.html">
                <i className="ni ni-ungroup text-yellow"></i>
                500 Error Page
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-tablet-button d-lg-none"></i>
              <span className="nav-link-inner--text">App Pages</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="account-settings.html">
                <i className="ni ni-lock-circle-open text-muted"></i>
                Account Settings
              </a>
              <a className="dropdown-item" href="login-page.html">
                <i className="ni ni-tv-2 text-danger"></i>
                Login Page
              </a>
              <a className="dropdown-item" href="register-page.html">
                <i className="ni ni-air-baloon text-pink"></i>
                Register Page
              </a>
              <a className="dropdown-item" href="reset-page.html">
                <i className="ni ni-atom text-info"></i>
                Reset Page
              </a>
              <a className="dropdown-item" href="invoice-page.html">
                <i className="ni ni-bullet-list-67 text-success"></i>
                Invoice Page
              </a>
              <a className="dropdown-item" href="checkout-page.html">
                <i className="ni ni-basket text-orange"></i>
                Checkout Page
              </a>
              <a className="dropdown-item" href="chat-page.html">
                <i className="ni ni-chat-round text-primary"></i>
                Chat Page
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div className="wrapper">
    <div className="page-header bg-default">
      <div className="page-header-image" style={{backgroundImage: "url('../assets/img/ill/register_bg.png')"}}></div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={this.onSubmit}>
            <h2>Create Account</h2>
            <div className="social-container">
              <button type="button" className="btn btn-facebook btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-facebook"></i></span>
              </button>
              <button type="button" className="btn-instagram btn btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-instagram"></i></span>
              </button>
              <button type="button" className="btn btn-twitter btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-twitter"></i></span>
              </button>
            </div>
            <span className="text-default mb-4">or use your email for registration</span>
            
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                </div>
                <input  type="text" placeholder="Phone Number"
                required
                className="form-control"
                //setting the email to blank
                value={this.state.email}
                //changing the value of state.email
                onChange={this.onChangeemail}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                </div>
                <input  type="password" placeholder="Password"
                required
                className="form-control"
                //setting the email to blank
                value={this.state.password}
                //changing the value of state.email
                onChange={this.onChangePassword}
                />
              </div>
            </div>
            <button className="btn btn-primary" >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" role="form">
            <h2>Sign in</h2>
            <div className="social-container">
              <button type="button" className="btn btn-facebook btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-facebook"></i></span>
              </button>
              <button type="button" className="btn-instagram btn btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-instagram"></i></span>
              </button>
              <button type="button" className="btn btn-twitter btn-sm">
                <span className="btn-inner--icon"><i className="fab fa-twitter"></i></span>
              </button>
            </div>
            <span className="text-default mb-4">or use your account</span>
            <div className="form-group mb-3">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                </div>
                <input className="form-control" placeholder="Email" type="email"/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                </div>
                <input className="form-control" placeholder="Password" type="password"/>
              </div>
            </div>
            <a href="javascript:;">Forgot your password?</a>
            <button className="btn btn-primary mt-3">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="text-white">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="btn btn-neutral btn-sm" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="text-white">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={this.onSignUp} className="btn btn-neutral btn-sm" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="container">
        <div className="row row-grid align-items-center mb-5">
          <div className="col-lg-6">
            <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
            <h4 className="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
          </div>
          <div className="col-lg-6 text-lg-center btn-wrapper">
            <button target="_blank" href="https://twitter.com/creativetim" rel="nofollow" className="btn btn-icon-only btn-twitter rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
              <span className="btn-inner--icon"><i className="fa fa-twitter"></i></span>
            </button>
            <button target="_blank" href="https://www.facebook.com/CreativeTim/" rel="nofollow" className="btn-icon-only rounded-circle btn btn-facebook" data-toggle="tooltip" data-original-title="Like us">
              <span className="btn-inner--icon"><i className="fab fa-facebook"></i></span>
            </button>
            <button target="_blank" href="https://dribbble.com/creativetim" rel="nofollow" className="btn btn-icon-only btn-dribbble rounded-circle" data-toggle="tooltip" data-original-title="Follow us">
              <span className="btn-inner--icon"><i className="fa fa-dribbble"></i></span>
            </button>
            <button target="_blank" href="https://github.com/creativetimofficial" rel="nofollow" className="btn btn-icon-only btn-github rounded-circle" data-toggle="tooltip" data-original-title="Star on Github">
              <span className="btn-inner--icon"><i className="fa fa-github"></i></span>
            </button>
          </div>
        </div>
        <hr/>
        <div className="row align-items-center justify-content-md-between">
          <div className="col-md-6">
            <div className="copyright">
              &copy; 2020 <a href="#" target="_blank">Creative Tim</a>.
            </div>
          </div>
          <div className="col-md-6">
            <ul className="nav nav-footer justify-content-end">
              <li className="nav-item">
                <a href="#" className="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" target="_blank">About Us</a>
              </li>
              <li className="nav-item">
                <a href="https://www.creative-tim.com/blog" className="nav-link" target="_blank">Blog</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" target="_blank">License</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
      </div>
    )
  }
}