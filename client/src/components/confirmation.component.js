import React, { Component } from 'react';
import axios from 'axios';
export default class Confirmation extends Component {
    constructor(props) {
      super(props);
  //binding so that this can be used
      this.onChangeemail = this.onChangeemail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        email: '',
        password: ''
      }
    }
    onChangeemail(e) {
        this.setState({
          email: e.target.value
        })
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          email: this.state.email,
          password: this.state.password
        }
    
        console.log(user);
    
        axios.post('https://tindev9044.herokuapp.com/confirmation/', user)
          .then(res => console.log(res.data));
      }
render(){
    return(<div>
        <form onSubmit={this.onSubmit}>
            <input type="text" 
            required
                //setting the email to blank
                value={this.state.email}
                //changing the value of state.email
                onChange={this.onChangeemail}></input>
            <input type="password"
            required
                //setting the email to blank
                value={this.state.password}
                //changing the value of state.email
                onChange={this.onChangePassword}></input>
                <input type="submit"></input>
        </form>
        
    </div>)
}
}