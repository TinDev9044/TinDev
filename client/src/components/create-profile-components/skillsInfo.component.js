import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link} from 'react-router-dom';
import TodoItems from './TodoItems.component.js';

const Skillsinfo = props => (
  
  <option value={props.skill.techName} id={props.skill._id} title={props.skill.techImage}>{props.skill.techName}</option>
)

export default class skillsInfo extends Component {
    constructor(props) {
      super(props);
      this.onChangetechName=this.onChangetechName.bind(this)
      this.addItem=this.addItem.bind(this)
      this.onChangeaboutMe = this.onChangeaboutMe.bind(this)
      this.onChangehobby = this.onChangehobby.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.state = {
        items: [],
        itemsId:[],
        skills: [],
      techName:'',
      techId:'',
      techImg:'',
      aboutMe:'',
      hobby:'',
      User:this.props.User
    }
    }
    //loading excercise data if this page is loaded directly
  componentDidMount() {
    axios.get('https://tindev9044.herokuapp.com/skillsImage/')
      .then(response => {
        this.setState({ skills: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeaboutMe(e){
    this.setState({
      aboutMe : e.target.value
    })
  }
  onChangehobby(e){
    this.setState({
      hobby : e.target.value
    })
  }
  onChangetechName(e){
    this.setState({
      techName : e.target.value,
      techId : e.target.selectedOptions[0].id,
      techImg :  e.target.selectedOptions[0].title
    })
  }
  addItem(e){
    if (this.state.techName !== "") {
      var newItem = {
        techName: this.state.techName,
        techImage : this.state.techImg
      };
      var newItemId = {
        techId: this.state.techId,
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem),
          itemsId : prevState.itemsId.concat(newItemId)
        };
      });
     
      this.state.techName = "";
      console.log(this.state.items);
      e.preventDefault();
    }
  }
  SkillList() {
    return this.state.skills.map(currentskill => {
      return <Skillsinfo skill={currentskill} key={currentskill._id}/>;
    })
  }
  onSubmit(e) {
    e.preventDefault();
console.log(this.state.User)
    const skillInfo = {
        userId:this.state.User._id,
        hobby:this.state.hobby,
        aboutMe:this.state.aboutMe,
        skill:this.state.itemsId
    }

    console.log(skillInfo);
    axios.post('https://tindev9044.herokuapp.com/skillsInfo/add', skillInfo)
      .then(res => {
        console.log("time for redirect from skills")
      }).catch(function(error) {
        console.log(error)
    })
      
  }
  
    render()
    {
        return(
<div className="tab-pane" id="link3">
<form className="js-validate" onSubmit={this.onSubmit}>
  <div className="container">
  <header>
    <h3 className="title mt-3">Skills</h3>
  </header>
  <hr className="line-primary"/>
  <div className="row row-input">
  <div className="col-md-12">
  <div className="js-form-message">
          <label className="labels">
            About Me
            <span className="text-danger">*</span>
          </label>
          <div className="form-group">
            <textarea className="form-control" value={this.state.aboutMe}
                    onChange={this.onChangeaboutMe} id="exampleFormControlTextarea1" rows="3" spellcheck="false" placeholder="Write something about project..."></textarea>
          </div>
        </div>
        </div>
  </div>
  <div className="row row-input">
  <div className="col-md-12">
  <div className="js-form-message">
          <label className="labels">
            Hobby
            <span className="text-danger">*</span>
          </label>
          <div className="form-group">
          <input type="text" className="form-control" value={this.state.hobby}
                    onChange={this.onChangehobby} name="Certificate" placeholder="Certificate Name" aria-label="Certificate Name" required=""/>
          </div>
        </div>
        </div>
  </div>
    <div className="row">
    <div className="col-md-12">
    <label className="labels">
            Skills
            <span className="text-danger">*</span>
          </label>
       </div>
    </div>
    <div className="row row-input">

      <div className="col-md-10">
      
        <div className="form-group">
          <select  onChange={this.onChangetechName}  className="form-control" data-trigger name="choices-single-default" id="ski">
          { this.SkillList() }
          </select>
        </div>
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary btn-block" onClick={this.addItem}>+</button>
      </div>
    </div>
    <br/>
  
  <div className="row">
  <TodoItems entries={this.state.items}/>
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