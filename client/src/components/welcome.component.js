import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {
  
  render() {
    return (
      <div className="about-us">
        
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg bg-primary navbar-dark headroom">
    <div className="container">
      <a className="navbar-brand mr-lg-5" href="https://demos.creative-tim.com/index.html">
        <img style={{height: "50px"}} src="../assets/img/brand/logo2.png"/>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a href="https://demos.creative-tim.com/index.html">
                <img src="../assets/img/brand/logo2.png"/>
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
          <Link to="/user">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-single-copy-04 d-lg-none"></i>
              <span className="nav-link-inner--text">Signup</span>
            </a>
            </Link>
            
          </li>
          <li className="nav-item dropdown">
            <a href="javascript:;" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-tablet-button d-lg-none"></i>
              <span className="nav-link-inner--text">Login</span>
            </a>
            
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="wrapper">
    <header className="header-5">
      <nav className="navbar navbar-expand-lg navbar-absolute">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="javascript:;">Creative Tim</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-header-6" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="example-header-6">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a>
                    Tin <span> DEV </span>
                  </a>
                </div>
                <div className="col-6 collapse-close text-right">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#example-header-6" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="javascript:;">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;">
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/CreativeTim">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.facebook.com/CreativeTim">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/CreativeTimOfficial">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center text-left">
            <div className="col-lg-5 col-12">
              <h1 className="display-3">Connect with us,<span className="text-primary"> Develop Anything.</span></h1>
              <p className="lead pb-4">We aim high at being focused on building relationships with our clients and community. Using our creative gifts drives this foundation.</p>
              <div className="row row-input">
                <div className="col-sm-8 col-12">
                  <input type="email" className="form-control" name="email" id="signupSrEmail" placeholder="Your email" aria-label="Your email"/>
                </div>
                <div className="col-sm-4 col-12 pl-lg-0">
                  <button type="submit" className="btn btn-primary btn-block">More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12 pl-0">
              <img className="ml-lg-5" src="../assets/img/ill/bg6-2.svg" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="team-2">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto text-center mb-5">
            <h3 className="display-3">The Executive Team</h3>
            <h4 className="lead">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card card-profile" data-image="profile-image">
              <div className="card-header">
                <div className="card-image">
                  <div className="dropdown">
                    <button type="button" className="btn btn-link dropdown-toggle btn-icon-only" data-toggle="dropdown" aria-expanded="false">
                      <i className="ni ni-settings-gear-65"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                      <a className="dropdown-item" href="javascript:;">Edit Profile</a>
                      <a className="dropdown-item" href="javascript:;">Settings</a>
                      <a className="dropdown-item" href="javascript:;">Log out</a>
                    </div>
                  </div>
                  <a href="javascript:;">
                    <img className="img rounded" src="../assets/img/faces/ali-pazani.jpg"/>
                  </a>
                </div>
              </div>
              <div className="card-body pt-0">
                <h4 className="display-4 mb-0">Sofia Scarlett</h4>
                <p className="lead">UX Designer</p>
                <div className="table-responsive">
                  <ul className="list-unstyled ">
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-info mr-3">
                            <i className="ni ni-atom"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Keen on great design</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-user-run"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Outdors lover</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-danger mr-3">
                            <i className="ni ni-chart-bar-32"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-profile" data-image="profile-image">
              <div className="card-header">
                <div className="card-image">
                  <div className="dropdown">
                    <button type="button" className="btn btn-link dropdown-toggle btn-icon-only" data-toggle="dropdown" aria-expanded="false">
                      <i className="ni ni-settings-gear-65"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                      <a className="dropdown-item" href="javascript:;">Edit Profile</a>
                      <a className="dropdown-item" href="javascript:;">Settings</a>
                      <a className="dropdown-item" href="javascript:;">Log out</a>
                    </div>
                  </div>
                  <a href="javascript:;">
                    <img className="img rounded" src="../assets/img/faces/team-5.jpg"/>
                  </a>
                </div>
              </div>
              <div className="card-body pt-0">
                <h4 className="display-4 mb-0">Dylan Wyatt</h4>
                <p className="lead">Team Lead</p>
                <div className="table-responsive">
                  <ul className="list-unstyled ">
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-info mr-3">
                            <i className="ni ni-atom"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Dedicated entrepreneur</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-user-run"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Urban exploration</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-danger mr-3">
                            <i className="ni ni-chart-bar-32"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Able to get good at everything</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-profile" data-image="profile-image">
              <div className="card-header">
                <div className="card-image">
                  <div className="dropdown">
                    <button type="button" className="btn btn-link dropdown-toggle btn-icon-only" data-toggle="dropdown" aria-expanded="false">
                      <i className="ni ni-settings-gear-65"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" x-placement="bottom-end">
                      <a className="dropdown-item" href="javascript:;">Edit Profile</a>
                      <a className="dropdown-item" href="javascript:;">Settings</a>
                      <a className="dropdown-item" href="javascript:;">Log out</a>
                    </div>
                  </div>
                  <a href="javascript:;">
                    <img className="img rounded" src="../assets/img/faces/atikh.jpg"/>
                  </a>
                </div>
              </div>
              <div className="card-body pt-0">
                <h4 className="display-4 mb-0">Mila Skylar</h4>
                <p className="lead">Content Creator</p>
                <div className="table-responsive">
                  <ul className="list-unstyled ">
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-info mr-3">
                            <i className="ni ni-atom"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">High quality publication</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-user-run"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Storytelling</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-1">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-danger mr-3">
                            <i className="ni ni-chart-bar-32"></i>
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-1">Master of words qualification</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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