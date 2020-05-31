import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  
  render() {
    return (
      <div>
      <nav className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div className="container">
      <div className="navbar-translate">
        <a className="navbar-brand" href="https://demos.creative-tim.com/material-kit/index.html">
          Bhalla </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter" rel="nofollow">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook" rel="nofollow">
              <i className="fa fa-facebook-square"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram" rel="nofollow">
              <i className="fa fa-instagram"></i>
            </a>
          </li>

          <li className="nav-item">
            <button className="btn btn-danger">Log-In<div className="ripple-container"></div></button>
          </li>

          <li className="nav-item">
            <button className="btn btn-danger" style={{marginLeft: "20px", marginRight: "-20px"}}>Sign-Up<div className="ripple-container"></div></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: "url('./assets/img/profile_city.jpg')"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="title">Your Story Starts With Us.</h1>
          <h4>Every landing page needs a small description after the big bold title, that&apos;s why we added this text here. Add here all the information that can make you or your product create the first impression.</h4>
          <br/>
         
            <Link to="/user" className="btn btn-danger btn-raised btn-lg"><i className="fa"></i> Get Started</Link>
          
        </div>
      </div>
    </div>
  </div>
  <div className="main main-raised">
    <div className="container">
      <div className="section text-center">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <h2 className="title">Let&apos;s talk product</h2>
            <h5 className="description">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn&apos;t scroll to get here. Add a button if you want the user to see more.</h5>
          </div>
        </div>
        <div className="features">
          <div className="row">
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-info">
                  <i className="material-icons">chat</i>
                </div>
                <h4 className="info-title">Free Chat</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-success">
                  <i className="material-icons">verified_user</i>
                </div>
                <h4 className="info-title">Verified Users</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="material-icons">computer</i>
                </div>
                <h4 className="info-title">Good Projects</h4>
                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section text-center">
        <h2 className="title">Here is our team</h2>
        <div className="team">
          <div className="row">
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="https://scontent-bom1-2.cdninstagram.com/v/t51.2885-15/e35/23734761_129853594367167_3508648682062872576_n.jpg?_nc_ht=scontent-bom1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=PlIn7QCfLNQAX8MVR2q&oh=07dcf795ecb79e467b5079c02ee26cb2&oe=5EFC4D1F" alt="Raised Image" className="img-raised rounded img-fluid"/>
                  </div>
                  <h4 className="card-title">Jafar Abbas
                    <br/>
                    <small className="card-description text-muted">Developer</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter"></i></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram"></i></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="https://media-exp1.licdn.com/dms/image/C5103AQGIeNRYarHoAQ/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=f6xoBlR0uQ8IqD4yEqVNa0DLnpTwgJWmMR68cnl2YVs" alt="Thumbnail Image" className="img-raised rounded img-fluid"/>
                  </div>
                  <h4 className="card-title">Gaurav Bhalla
                    <br/>
                    <small className="card-description text-muted">Developer</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter"></i></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="col-md-6 ml-auto mr-auto">
                    <img src="https://scontent-bom1-1.cdninstagram.com/v/t51.2885-15/e35/74923719_329038091293780_3706479781344968805_n.jpg?_nc_ht=scontent-bom1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=KelWUJKWTIkAX_Q2LLh&oh=040a8a19da515265ec95e21334d01e35&oe=5EFB7F82" alt="Thumbnail Image" className="img-raised rounded img-fluid"/>
                  </div>
                  <h4 className="card-title">Ayush Srivastava
                    <br/>
                    <small className="card-description text-muted">Developer</small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some
                      <a href="#">links</a> for people to be able to follow them outside the site.</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-twitter"></i></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-instagram"></i></a>
                    <a href="#pablo" className="btn btn-link btn-just-icon"><i className="fa fa-facebook-square"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-contacts">
        <div className="row">
          <div className="col-md-8 ml-auto mr-auto">
            <h2 className="text-center title">Work with us</h2>
            <h4 className="text-center description">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Your Name</label>
                    <input type="email" className="form-control"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="bmd-label-floating">Your Email</label>
                    <input type="email" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="exampleMessage" className="bmd-label-floating">Your Message</label>
                <textarea type="email" className="form-control" rows="4" id="exampleMessage"></textarea>
              </div>
              <div className="row">
                <div className="col-md-4 ml-auto mr-auto text-center">
                  <button className="btn btn-primary btn-raised">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer footer-default">
    <div className="container">
      <nav className="float-left">
        <ul>
          <li>
            <a href="https://www.creative-tim.com/">
              Creative Tim
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/presentation">
              About Us
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/blog">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, made with <i className="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a> for a better web.
      </div>
    </div>
  </footer>
      </div>
    )
  }
}