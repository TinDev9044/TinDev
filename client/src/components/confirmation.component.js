import React, { Component } from 'react';
import axios from 'axios';
import { Redirect} from 'react-router-dom';

export default class Confirmation extends Component {
    constructor(props) {
      super(props);
  //binding so that this can be used
  
      this.onChangeOtp = this.onChangeOtp.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        otp: '',
        submitted:false,
        User:{}
      }
    }

   componentDidMount() {
      this.setState({
        User: this.props.location.state.User
      })
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
            if (res.data.type === 200) {
              this.setState({
                submitted: true,
                User:res.data.User
              }) 
              console.log(this.state.User)
            }
      })
      .catch(function(error) {
          console.log(error)
      })

          }
      
render(){
 if(this.state.submitted===true){
    return(<Redirect to={{
      pathname: '/personalInfo',
      state: { User: this.state.User }
  }} />)
  }
     
    return(<div>
     <h1>{this.state.User.email}</h1>
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