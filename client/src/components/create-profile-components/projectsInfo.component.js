import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class ProjectInfo extends Component {
    constructor(props) {
      super(props);
  
    }
    render()
    {
        return(
<div className="tab-pane" id="link5">
<form className="js-validate">
  <div className="container">
  <header>
    <h3 className="title mt-3">Add Projects</h3>
  </header>
  <hr className="line-primary"/>
    <div className="row">
      <div className="col-md-12">
        <label className="labels">
          Project Name
          <span className="text-danger">*</span>
        </label>
        <input type="text" className="form-control" name="Certificate" placeholder="Certificate Name" aria-label="Certificate Name" required=""/>
        <br/>
        <div className="js-form-message">
          <label className="labels">
            Type
            <span className="text-danger">*</span>
          </label>
            <div className="form-group">
              <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                <option value="2">Web Application</option>
                <option value="3">Android Application</option>
                <option value="4">Web and Android Application</option>
                <option value="5">Others</option>
              </select>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="labels">
              Technologies Used
            </label>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <select className="form-control" data-trigger name="choices-multiple-default" id="choices-multiple-default">
                    <option selected>Python</option>
                    <option value="2">Angular</option>
                    <option value="3">Bootsrap</option>
                    <option value="4">Vue</option>
                    <option value="4">React</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label className="labels">
              Team Size
            </label>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                    <option>1</option>
                    <option>2</option>
                    <option selected="selected">3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                
                  </select>
                </div>
              </div>
            </div>
          </div> 
        </div>
         
        <div className="js-form-message">
          <label className="labels">
            Description
            <span className="text-danger">*</span>
          </label>
          <div className="form-group">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" spellcheck="false" placeholder="Write something about project..."></textarea>
          </div>
        </div>
        
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
        <input className="form-control" placeholder=" Project Url" type="text"/>
      </div>
    </div>
    <section className="text-center">
      <div className="row">
        <div className="col-md-12 col-sm-8">
          <small className="d-block text-uppercase font-weight-bold mb-3">Uplaod Project Screenshots (optional)</small>
          <div className="fileinput fileinput-new text-center" data-provides="fileinput">
            <div className="fileinput-new thumbnail">
              <img src="../assets/img/image_placeholder.jpg" alt="..."/>
            </div>
            <div className="fileinput-preview fileinput-exists thumbnail"></div>
            <div>
              <span className="btn btn-round btn-file mt-2">
                <span className="fileinput-new">Select image</span>
                <span className="fileinput-exists">Change</span>
                <input type="file" name="..."/>
              </span>
              <a href="javascript:;" className="btn btn-danger btn-round fileinput-exists" data-dismiss="fileinput"><i className="fa fa-times"></i> Remove</a>
            </div>
          </div>
        </div>
      </div>
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