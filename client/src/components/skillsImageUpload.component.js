import React, { Component } from 'react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { Redirect} from 'react-router-dom';

export default class SkillsImage extends Component {
    constructor(props) {
      super(props);        
      this.onChangename = this.onChangename.bind(this);
      this.onChangeimage = this.onChangeimage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
         name:'',
         image:''
      }
  }
  onChangename(e) {
      this.setState({
        name: e.target.value
      })
    }
  onChangeimage(e) {
      this.setState({
          image: e.base64.toString()
      })
    }
    onSubmit(e) {
      e.preventDefault();
      const skillsImage = {
          name:this.state.name,
          image:this.state.image
      }
      console.log(skillsImage);
      axios.post('https://tindev9044.herokuapp.com/skillsImage/add', skillsImage)
        .then(res => {
          console.log(skillsImage)
        }).catch(function(error) {
          console.log(error)
      })
        
    }
    
    render(){
        return(<div>
                    <form onSubmit={this.onSubmit}>
                            <input type="text" value={this.state.name} onChange={this.onChangename}/>
                            <FileBase64 type="file" name="..." multiple={false} onDone={this.onChangeimage}/>                            
                    <input type="submit" />    
                    </form>
                  </div>
        )
    }
}