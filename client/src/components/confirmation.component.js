import React, { Component } from 'react';
import axios from 'axios';
export default class Confirmation extends Component {
    constructor(props) {
      super(props);
  //binding so that this can be used
      this.onChangeOtp = this.onChangeOtp.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        otp: ''
      }
    }
    onChangeOtp(e) {
        this.setState({
          otp: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();
    
        const Otp = {
          otp: this.state.otp
        }
    
        console.log(Otp);
    
        axios.post('https://tindev9044.herokuapp.com/confirmation/', Otp)
          .then(res => {

            if (res.status == 200) {
              window.location = "/user"
          } 
      })
      .catch(function(error) {
          window.location = "/confirmation"
      })

          }
      
render(){
    return(<div>
        <form onSubmit={this.onSubmit}>
            <input type="text" 
            required
                //setting the email to blank
                value={this.state.otp}
                //changing the value of state.email
                onChange={this.onChangeOtp}></input>
                <input type="submit"></input>
        </form>
        
    </div>)
}
}