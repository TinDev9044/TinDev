import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class CertificationInfo extends Component {
    constructor(props) {
      super(props);
  
    }
    render()
    {
        return(
<div className="tab-pane" id="link4">
                    <form className="js-validate">
                      <div className="container">
                      <header>
                        <h3 className="title mt-3">Add Certificates/Achevements Details</h3>
                      </header>
                      <hr className="line-primary"/>
                        <div className="row">
                          <div className="col-md-12">
                            <label className="labels">
                              Certificate Name
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Certificate" placeholder="Certificate Name" aria-label="Certificate Name" required=""/>
                            <br/>
                            <label className="labels">
                              Issuing Intitution 
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Institution" placeholder="Intitution Name" aria-label="Intitution Name" required=""/>
                            <br/>
                            <label className="labels">
                              Duration
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Duration" placeholder="Ex: 2 Months" aria-label="Ex: 2 Months" required=""/>
                          </div>
                        </div>
                        <br/>
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="ni ni-world-2"></i>
                              </span>
                            </div>
                            <input className="form-control" placeholder=" Certificate Url" type="text"/>
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