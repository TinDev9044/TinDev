import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { Redirect} from 'react-router-dom';

export default class PersonalInfo extends Component {
    constructor(props) {
      super(props);
        //binding so that this can be used
      this.onChangefirstName = this.onChangefirstName.bind(this);
      this.onChangelastName = this.onChangelastName.bind(this);
      this.onChangegender = this.onChangegender.bind(this);
      this.onChangephone = this.onChangephone.bind(this);
      this.onChangeprofilePic = this.onChangeprofilePic.bind(this);
      this.onChangeday = this.onChangeday.bind(this);
      this.onChangemonth = this.onChangemonth.bind(this);
      this.onChangeyear = this.onChangeyear.bind(this);
      this.onChangehouseNo = this.onChangehouseNo.bind(this);
      this.onChangelocality= this.onChangelocality.bind(this);
      this.onChangecity = this.onChangecity.bind(this);
      this.onChangestate = this.onChangestate.bind(this);
      this.onChangecountry = this.onChangecountry.bind(this);
      this.onChangepostcode = this.onChangepostcode.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
         firstName:'',
         lastName:'',
         gender:'Male',
         phone:'',
         profilePic:'',
         day:'1',
         month:'01',
         year:'1996',
         houseNo:'',
         locality:'',
         city:'',
         state:'',
         country:'',
         postcode:'',
         User:this.props.User
      }
  }
  onChangefirstName(e) {
      this.setState({
        firstName: e.target.value
      })
    }
  onChangelastName(e) {
      this.setState({
          lastName: e.target.value
      })
    }
  onChangegender(e) {
      this.setState({
          gender: e.target.value
      })
    }
  onChangephone(e) {
      this.setState({
          phone: e.target.value
      })
    }
  onChangeprofilePic(e) {
      this.setState({
          profilePic: e.base64.toString()
      })
    }
  onChangeday(e) {
      this.setState({
          day: e.target.value
      })
    }
  onChangemonth(e) {
      this.setState({
          month: e.target.value
      })
    }
  onChangeyear(e) {
      this.setState({
          year: e.target.value
      })
    }
  onChangehouseNo(e) {
      this.setState({
          houseNo: e.target.value
      })
    }
  onChangelocality(e) {
      this.setState({
          locality: e.target.value
      })
  }
  onChangecity(e) {
      this.setState({
          city: e.target.value
      })
    }
    onChangestate(e) {
      this.setState({
          state: e.target.value
      })
    }
    onChangecountry(e) {
      this.setState({
          country: e.target.value
      })
    }
    onChangepostcode(e) {
      this.setState({
          postcode: e.target.value
      })
    }
   
    onSubmit(e) {
      e.preventDefault();
  console.log(this.state.User._id)
      const personelInfo = {
          userId:this.state.User._id,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          gender:this.state.gender,
          phone:this.state.phone,
          profilePic:this.state.profilePic,
          dob:this.state.day+'/'+this.state.month+'/'+this.state.year,
          houseNo:this.state.houseNo,
          locality:this.state.locality,
          city:this.state.city,
          state:this.state.state,
          country:this.state.country,
          postcode:this.state.postcode
      }
  
      console.log(personelInfo);
      axios.post('https://tindev9044.herokuapp.com/personalInfo/add', personelInfo)
        .then(res => {
          alert("Success")
          console.log("time for redirect")
        }).catch(function(error) {
          console.log(error)
      })
        
    }
    render()
    {
        return(
<div className="tab-pane active" id="link1">
<form className="js-validate" onSubmit={this.onSubmit}>
  <div className="container">
  <header>
    <h3 className="title mt-3">General Information</h3>
    
  </header>
  <hr className="line-primary"/>
    <section className="text-center">
    
      <div className="fileinput fileinput-new text-center" data-provides="fileinput">
        <div className="fileinput-new thumbnail img-circle img-raised">
          <img src="../assets/img/placeholder.jpg" alt="..."/>
        </div>
        
        <div className="fileinput-preview fileinput-exists thumbnail img-circle img-raised"></div>
        <div>
        
          <span className="btn btn-raised btn-round btn-primary btn-file btn-sm mx-auto mt-3">
            <span className="fileinput-new">Add Photo</span>
            <span className="fileinput-exists">Change</span>
            <FileBase64 type="file" name="..." 
                    multiple={false} 
                    onDone={this.onChangeprofilePic}
                    />
                    </span>
          <br/>
          <a href="#pablo" className="btn btn-danger btn-round fileinput-exists btn-simple btn-sm" data-dismiss="fileinput"><i className="tim-icons icon-simple-remove"></i> Remove</a>
        </div>
      </div>
    </section>
    <br/>
    <div className="row">
      <div className="col-md-6">
        <label className="labels">
          First name
          <span className="text-danger">*</span>
        </label>
        <input type="text" value={this.state.firstName}
                    onChange={this.onChangefirstName} className="form-control" name="firstName" placeholder="Cristopher" aria-label="Cristopher" required=""/>
      </div>
      <div className="col-md-6">
        <label className="labels">
          Last name
          <span className="text-danger">*</span>
        </label>
        <input type="text" value={this.state.lastName}
                    onChange={this.onChangelastName} className="form-control" name="lastName" placeholder="Thompson" aria-label="Thompson" required=""/>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-md-6">
        <div className="js-form-message">
          <label className="labels">
            I'm
            <span className="text-danger">*</span>
          </label>
            <div className="form-group">
              <select value={this.state.gender}
                    onChange={this.onChangegender} className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                <option value="Male" selected="selected">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="js-form-message">
          <label className="labels">
            Phone
          </label>
          <input type="text" value={this.state.phone}
                    onChange={this.onChangephone} className="form-control" placeholder="+91 (0762) 230991" aria-label="+91 (0762) 230991"/>
        </div>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-md-12 ">
        <label className="labels">
          Birth Date
        </label>
        <div className="row">
          <div className="col-md-4 align-self-center">
            <div className="form-group">
              <select value={this.state.month}
                    onChange={this.onChangemonth} className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option selected="selected" value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <select className="form-control" value={this.state.day}
                    onChange={this.onChangeday} data-trigger name="choices-single-default" id="choices-single-default">
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11" selected="selected">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <select className="form-control" value={this.state.year}
                    onChange={this.onChangeyear} data-trigger name="choices-single-default" id="choices-single-default">
                <option value="1996" selected="selected">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-md-12">
        <div className="js-form-message">
          <label className="labels">
            Email address
            <span className="text-danger">*</span>
          </label>
          <input type="email" className="form-control" name="emailAddress" placeholder={this.state.User.email} aria-label={this.state.User.email} required="" disabled/>
        </div>
      </div>
    </div>
    <br/>
    <h5 className="title mt-3">Address</h5>
    <hr className="line-primary"/>
    <div className="row">
      <div className="col-md-4">
        <div className="js-form-message mb-4">
          <label className="labels">
            Apt, suite, etc.
          </label>
          <input type="text" value={this.state.houseNo}
                    onChange={this.onChangehouseNo} className="form-control" placeholder="YC7B 3UT" aria-label="YC7B 3UT"/>
        </div>
      </div>
      <div className="col-md-8">
        <div className="js-form-message">
          <label className="labels">
            Street address
            <span className="text-danger">*</span>
          </label>
          <input type="text" value={this.state.locality}
                    onChange={this.onChangelocality} className="form-control" name="streetAddress" placeholder="420 Long Beach, CA" aria-label="420 Long Beach, CA" required=""/>
        </div>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-md-3">
        <div className="js-form-message">
          <label className="labels">
            Postcode/Zip
            <span className="text-danger">*</span>
          </label>
          <input type="text" value={this.state.postcode}
                    onChange={this.onChangepostcode} className="form-control" name="postcode" placeholder="211016" aria-label="211016" required=""/>
        </div>
      </div>
      <div className="col-md-3">
        <div className="js-form-message mb-4">
          <label className="labels">
            City
            <span className="text-danger">*</span>
          </label>
          <input type="text" value={this.state.city}
                    onChange={this.onChangecity} className="form-control" name="cityAddress" placeholder="Allahabad" aria-label="Allahabad" required=""/>
        </div>
      </div>
      <div className="col-md-3">
        <div className="js-form-message">
          <label className="labels">
            State
            <span className="text-danger">*</span>
          </label>
          <input type="text" value={this.state.state}
                    onChange={this.onChangestate} className="form-control" name="state" placeholder="UttarPradesh" aria-label="UttarPradesh" required=""/>
        </div>
      </div>
      <div className="col-md-3">
        <div className="mb-4">
          <label className="labels">
            Country
            <span className="text-danger">*</span>
          </label>
          <select className="form-control" value={this.state.country}
                    onChange={this.onChangecountry} data-trigger name="choices-single-default" id="choices-single-default">
            <option selected="">Select country</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DO">Dominican Republic</option>
            <option value="IA">India</option>
            <option value="IQ">Iraq</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="MG">Madagascar</option>
            <option value="MT">Malta</option>
            <option value="NO">Norway</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="RU">Russian Federation</option>
            <option value="LC">Saint Lucia</option>
            <option value="WS">Samoa</option>
            <option value="SM">San Marino</option>
            <option value="SA">Saudi Arabia</option>
            <option value="ES">Spain</option>
            <option value="SZ">Swaziland</option>
            <option value="SE">Sweden</option>
            <option value="TR">Turkey</option>
            <option value="UG">Uganda</option>
            <option value="UA">Ukraine</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States</option>
            <option value="VN">Viet Nam</option>
          </select>
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