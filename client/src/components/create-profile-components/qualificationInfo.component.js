import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';
export default class QualificationInfo extends Component {
    constructor(props) {
      super(props);        
      this.onChangeinstitute = this.onChangeinstitute.bind(this);
      this.onChangecourse = this.onChangecourse.bind(this);
      this.onChangegrade = this.onChangegrade.bind(this);
      this.onChangestartYear = this.onChangestartYear.bind(this);
      this.onChangeendYear = this.onChangeendYear.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
         institute:'',
         course:'',
         grade:'',
         startYear:'2014',
         endYear:'2019',
         User:this.props.User
      }
  }
  onChangeinstitute(e) {
      this.setState({
        institute: e.target.value
      })
    }
  onChangecourse(e) {
      this.setState({
          course: e.target.value
      })
    }
  onChangegrade(e) {
      this.setState({
          grade: e.target.value
      })
    }
  onChangestartYear(e) {
      this.setState({
          startYear: e.target.value
      })
    }
  onChangeendYear(e) {
      this.setState({
          endYear: e.base64.toString()
      })
    }
    onSubmit(e) {
      e.preventDefault();
  console.log(this.state.User._id)
      const qualificationInfo = {
          userId:this.state.User._id,
          institute:this.state.institute,
          course:this.state.course,
          grade:this.state.grade,
          startYear:this.state.startYear,
          endYear:this.state.endYear,
      }
  
      console.log(qualificationInfo);
      axios.post('https://tindev9044.herokuapp.com/qualificationInfo/add', qualificationInfo)
        .then(res => {
          console.log("time for redirect from qualification")
        }).catch(function(error) {
          console.log(error)
      })
        
    }
    
    render(){
        return(<div>
               <div className="tab-pane" id="link2">
                    <form className="js-validate" onSubmit={this.onSubmit}>
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
                            <input type="text" value={this.state.institute}
                    onChange={this.onChangeinstitute}  className="form-control" name="Institution" placeholder="Ex: How to University" aria-label="Ex: How to University" required=""/>
                            <br/>
                            <label className="labels">
                              Study Program
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" value={this.state.course}
                    onChange={this.onChangecourse}  className="form-control" name="Institution" placeholder="Ex: Bachelor's" aria-label="Ex: Bachelor's" required=""/>
                            <br/>
                            <label className="labels">
                              Grade
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" value={this.state.grade}
                    onChange={this.onChangegrade} className="form-control" name="Grade" placeholder="Grade" aria-label="Grade" required=""/>
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
                                  <select className="form-control" value={this.state.startYear}
                    onChange={this.onChangestartYear} data-trigger name="choices-single-default" id="choices-single-default">
                                    <option selected="selected"  value="2014">2014</option>
                                    <option  value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
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
                                  <select className="form-control" value={this.state.endYear}
                    onChange={this.onChangeendYear} data-trigger placeholder="Year" name="choices-single-default" id="choices-single-default">
                                    <option selected="selected" value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
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