import React, { Component, useState } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
import ProjectInfo from './projectsInfo.component'
import CertificationsInfo from './certificationsInfo.component'
import PersonalInfo from './personalInfo.component'
import QualificationsInfo from './qualificationInfo.component'
import SkillsInfo from './skillsInfo.component'
import SocialInfo from './socialInfo.component'

export default class CreatePersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User:this.props.location.state.User
   }
    }
   
  
      render(){
          return(
              <div className="checkout-page">
              
  <div className="wrapper">
    <div className="section-shaped my-0 skew-separator skew-mini">
      <div className="page-header page-header-small header-filter">
        <div className="page-header-image" style={{backgroundImage: "url('../assets/img/pages/photo-15.jpg')"}}>
        </div>
        <div className="container">
          <div className="header-body text-center mb-7">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 className="text-white">Setup Profile</h1>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="upper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="container">
              <h3 className="title text-white mt-3">Menu</h3>
              <div className="row">
                <div className="card">
                  <div className="card-body">
                    <div>
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Profile Completion</span>
                        <div className="progress-wrapper">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-primary">80%</span>
                            </div>
                          </div>
                          <div className="progress">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-wrapper">
                      <ul className="nav nav-pills nav-pills-primary flex-column" role="tablist">
                        <li className="nav-item p-0 text-center">
                          <a className="nav-link active" data-toggle="tab" href="#link1" role="tablist">
                            Personal Information 
                          </a>
                        </li>
                        <li className="nav-item p-0 text-center">
                          <a className="nav-link" data-toggle="tab" href="#link2" role="tablist">
                            About Me
                          </a>
                        </li>
                        <li className="nav-item text-center">
                          <a className="nav-link" data-toggle="tab" href="#link4" role="tablist">
                            Social
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card">
              <div className="">
                <div className="tab-content">
         
                <div className="tab-pane active" id="link1">
                <PersonalInfo User={this.state.User}/>
                </div>
                <div className="tab-pane" id="link2">
                <SkillsInfo User={this.state.User}/>
                </div>
                <div className="tab-pane" id="link4">
                <SocialInfo User={this.state.User}/>
                </div>

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
          );
      }
}