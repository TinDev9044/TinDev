import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class SocialInfo extends Component {
    constructor(props) {
      super(props);
      this.onChangelinkedin = this.onChangelinkedin.bind(this);
      this.onChangewebsite = this.onChangewebsite.bind(this);
      this.onChangefacebook = this.onChangefacebook.bind(this);
      this.onChangetwitter = this.onChangetwitter.bind(this);
      this.onChangequora = this.onChangequora.bind(this);
      this.onChangeskype = this.onChangeskype.bind(this);
      this.onChangegithub = this.onChangegithub.bind(this);
      this.onChangestackoverflow = this.onChangestackoverflow.bind(this);
      this.onChangemedium = this.onChangemedium.bind(this);
      this.onChangeinstagram = this.onChangeinstagram.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        linkedin:'',
        website:'',
        facebook:'',
        twitter:'',
        quora:'',
        skype:'',
        github:'',
        stackoverflow :'',
        medium:'',
        instagram:'',
        User:this.props.User
     }
    }
    onChangelinkedin(e) {
      this.setState({
        linkedin: e.target.value
      })
    }
  onChangewebsite(e) {
      this.setState({
          website: e.target.value
      })
    }
  onChangefacebook(e) {
      this.setState({
          facebook: e.target.value
      })
    }
  onChangetwitter(e) {
      this.setState({
          twitter: e.target.value
      })
    }
  onChangequora(e) {
      this.setState({
          quora: e.target.value
      })
    }
  onChangeskype(e) {
      this.setState({
        skype: e.target.value
      })
    }
  onChangegithub(e) {
      this.setState({
          github: e.target.value
      })
    }
  onChangestackoverflow(e) {
      this.setState({
          stackoverflow: e.target.value
      })
    }
  onChangemedium(e) {
      this.setState({
          medium: e.target.value
      })
    }
  onChangeinstagram(e) {
      this.setState({
          instagram: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
  console.log(this.state.User._id)
      const socialInfo = {
          userId:this.state.User._id,
          linkedin:this.state.linkedin,
          website:this.state.website,
          facebook:this.state.facebook,
          twitter:this.state.twitter,
          quora:this.state.quora,
          skype:this.state.skype,
          github:this.state.github,
          stackoverflow:this.state.stackoverflow,
          medium:this.state.medium,
          instagram:this.state.instagram
      }
  
      console.log(socialInfo);
      axios.post('https://tindev9044.herokuapp.com/socialInfo/add', socialInfo)
        .then(res => {
          console.log("time for redirect from social")
        }).catch(function(error) {
          console.log(error)
      })
        
    }
    
    render()
    {
        return(
                  <div className="tab-pane" id="link6">
                  <form className="js-validate" onSubmit={this.onSubmit}>
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
                              <input className="form-control" value={this.state.linkedin}
                    onChange={this.onChangelinkedin}  placeholder=" LinkedIn" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="ni ni-world-2"></i>
                                </span>
                              </div>
                              <input className="form-control" value={this.state.website}
                    onChange={this.onChangewebsite} placeholder=" Website" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-facebook"></i>
                                </span>
                              </div>
                              <input className="form-control" value={this.state.facebook}
                    onChange={this.onChangefacebook} placeholder=" Facebook" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-twitter"></i>
                                </span>
                              </div>
                              <input className="form-control" value={this.state.twitter}
                    onChange={this.onChangetwitter} placeholder=" Twitter" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-quora"></i>
                                </span>
                              </div>
                              <input className="form-control" value={this.state.quora}
                    onChange={this.onChangequora} placeholder=" Quora" type="text"/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-4">
                              <div className="input-group-append">
                                <span className="input-group-text">
                                  <i className="fa fa-skype"></i>
                                </span>
                              </div>
                              <input className="form-control" value={this.state.skype}
                    onChange={this.onChangeskype} placeholder=" Skype" type="text"/>
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
                            <input className="form-control" value={this.state.github}
                    onChange={this.onChangegithub} placeholder=" GitHub" type="text"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-stack-overflow"></i>
                              </span>
                            </div>
                            <input className="form-control" value={this.state.stackoverflow}
                    onChange={this.onChangestackoverflow} placeholder=" Stack Overflow" type="text"/>
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
                            <input className="form-control" value={this.state.medium}
                    onChange={this.onChangemedium} placeholder=" Medium" type="text"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group mb-4">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-instagram"></i>
                              </span>
                            </div>
                            <input className="form-control" value={this.state.instagram}
                    onChange={this.onChangeinstagram} placeholder=" Instagram" type="text"/>
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