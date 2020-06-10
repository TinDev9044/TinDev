import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';

export default class SkillsInfo extends Component {
    constructor(props) {
      super(props);
  
    }
    render()
    {
        return(
<div className="tab-pane" id="link3">
<form className="js-validate">
  <div className="container">
  <header>
    <h3 className="title mt-3">Skills</h3>
  </header>
  <hr className="line-primary"/>
    <div className="row row-input">
      <div className="col-sm-6 col-12 offset-sm-2">
        <div className="form-group">
          <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
            <option selected>Python</option>
            <option value="2">Angular</option>
            <option value="3">Bootsrap</option>
            <option value="4">Vue</option>
            <option value="4">React</option>
          </select>
        </div>
      </div>
      <div className="col-sm-2 col-12 pl-lg-0">
        <button type="submit" className="btn btn-primary btn-block">+</button>
      </div>
    </div>
    <br/>
  
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-animation="autohide">
        <div className="toast-header">
          <img src="../assets/img/bootstrap.jpg" className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">Bootsrap</strong>
          <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="toast bg-info" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header text-white">
          <img src="../assets/img/react.jpg" className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">React</strong>
          <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="toast bg-warning mt-md-4 mt-lg-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header text-white">
          <img src="../assets/img/angular.jpg" className="rounded mr-2" alt="..."/>
          <strong className="mr-auto">Angular</strong>
          <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
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