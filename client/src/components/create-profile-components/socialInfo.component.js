import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class SocialInfo extends Component {
    constructor(props) {
      super(props);
  
    }
    render()
    {
        return(
                  <div className="tab-pane" id="link6">
                  <form className="js-validate">
                    <div className="container">
                      <header>
                        <h3 className="title mt-3">General/Social Media</h3>
                      </header>
                      <hr className="line-primary"/>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-linkedin"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" LinkedIn" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="ni ni-world-2"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" Website" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-facebook"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" Facebook" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-twitter"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" Twitter" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-quora"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" Quora" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-skype"></i>
                                </span>
                              </div>
                              <input className="form-control" placeholder=" Skype" type="text"/>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                     <h5 className="title mt-3">Coding</h5>
                     <hr className="line-primary"/>
                     <div className="row">
                       <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-github"></i>
                              </span>
                            </div>
                            <input className="form-control" placeholder=" GitHub" type="text"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-stack-overflow"></i>
                              </span>
                            </div>
                            <input className="form-control" placeholder=" Stack Overflow" type="text"/>
                          </div>
                        </div>
                       </div>
                     </div>
                  
                     <h5 className="title mt-3">Creative Plateforms</h5>
                     <hr className="line-primary"/>
                     <div className="row">
                       <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-medium"></i>
                              </span>
                            </div>
                            <input className="form-control" placeholder=" Medium" type="text"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-instagram"></i>
                              </span>
                            </div>
                            <input className="form-control" placeholder=" Instagram" type="text"/>
                          </div>
                        </div>
                       </div>
                     </div>
                    <section className="text-center">
                      <div className="row mt-5">
                        <div className="col-md-12">
                          <button className="btn btn-primary" type="submit">Save Changes</button>
                          <button className="btn btn-outline-primary" type="reset">Cancel</button>
                        </div>
                      </div>
                    </section>
                    <br/>
                    </div>
                  </form>
                </div>
        );
    }
}