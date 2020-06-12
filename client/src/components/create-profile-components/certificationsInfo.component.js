import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class CertificationInfo extends Component {
    constructor(props) {
      super(props);
      this.onChangecertificateName = this.onChangecertificateName.bind(this);
      this.onChangeissuedBy = this.onChangeissuedBy.bind(this);
      this.onChangecertificateUrl = this.onChangecertificateUrl.bind(this);
      this.onChangeduration = this.onChangeduration.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        certificateName:'',
        issuedBy:'',
        certificateUrl:'',
        duration:'',
        User:this.props.User
     }
    }
    onChangecertificateName(e) {
      this.setState({
        certificateName: e.target.value
      })
    }
  onChangeissuedBy(e) {
      this.setState({
          issuedBy: e.target.value
      })
    }
  onChangecertificateUrl(e) {
      this.setState({
          certificateUrl: e.target.value
      })
    }
  onChangeduration(e) {
      this.setState({
          duration: e.target.value
      })
    }
    onSubmit(e) {
      e.preventDefault();
  console.log(this.state.User._id)
      const certificationInfo = {
          userId:this.state.User._id,
          certificateName:this.state.certificateName,
          issuedBy:this.state.issuedBy,
          certificateUrl:this.state.certificateUrl,
          duration:this.state.duration,
      }
  
      console.log(certificationInfo);
      axios.post('https://tindev9044.herokuapp.com/certificationsInfo/add', certificationInfo)
        .then(res => {
          console.log("time for redirect from certification")
        }).catch(function(error) {
          console.log(error)
      })
        
    }
    render()
    {
        return(
<div className="tab-pane" id="link4">
                    <form className="js-validate" onSubmit={this.onSubmit}>
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
                            <input type="text" value={this.state.certificateName}
                    onChange={this.onChangecertificateName} className="form-control" name="Certificate" placeholder="Certificate Name" aria-label="Certificate Name" required=""/>
                            <br/>
                            <label className="labels">
                              Issuing Intitution 
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" value={this.state.issuedBy}
                    onChange={this.onChangeissuedBy} className="form-control" name="Institution" placeholder="Intitution Name" aria-label="Intitution Name" required=""/>
                            <br/>
                            <label className="labels">
                              Duration
                              <span className="text-danger">*</span>
                            </label>
                            <input type="text" value={this.state.duration}
                    onChange={this.onChangeduration} className="form-control" name="Duration" placeholder="Ex: 2 Months" aria-label="Ex: 2 Months" required=""/>
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
                            <input className="form-control" value={this.state.certificateUrl}
                    onChange={this.onChangecertificateUrl} placeholder=" Certificate Url" type="text"/>
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