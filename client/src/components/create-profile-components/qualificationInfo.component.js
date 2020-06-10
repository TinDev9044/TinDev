import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
export default class QualificationInfo extends Component {
    constructor(props) {
      super(props);
  //binding so that this can be used
        
        
    }
    render(){
        return(<div>
               <div className="tab-pane" id="link2">
                    <form className="js-validate">
                      <div className="container">
                      <header>
                        <h3 className="title mt-3">Education</h3>
                      </header>
                      <hr className="line-primary"/>
                        <div className="row">
                          <div className="col-md-12">
                            <label className="labels">
                              Institution/Place of Education
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Institution" placeholder="Ex: How to University" aria-label="Ex: How to University" required=""/>
                            <br/>
                            <label className="labels">
                              Study Program
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Institution" placeholder="Ex: Bachelor's" aria-label="Ex: Bachelor's" required=""/>
                            <br/>
                            <label className="labels">
                              Grade
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" className="form-control" name="Grade" placeholder="Grade" aria-label="Grade" required=""/>
                          </div>
                        </div>
                        <br/>
                        <div className="row">
                          <div className="col-md-6">
                            <label className="labels">
                              Start Year
                            </label>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                    <option>1986</option>
                                    <option>1987</option>
                                    <option>1988</option>
                                    <option selected="selected">1989</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label className="labels">
                              End Year (or expected)
                            </label>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <select className="form-control" data-trigger placeholder="Year" name="choices-single-default" id="choices-single-default">
                                    <option>1986</option>
                                    <option>1987</option>
                                    <option>1988</option>
                                    <option selected="selected">1989</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                    <option>1994</option>
                                    <option>1995</option>
                                    <option>1996</option>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br/>    
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
        </div>)
    }
}