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
      this.onSubmit = this.onSubmit.bind(this)
      this.state = {
        items: [],
        itemsId:[],
        skills: [],
      techName:'',
      techId:'',
      techImg:'',
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
      <div className="col-sm-6 col-12 offset-sm-2">
        <div className="form-group">
          <select  onChange={this.onChangetechName}  className="form-control" data-trigger name="choices-single-default" id="ski">
          { this.SkillList() }
          </select>
        </div>
      </div>
      <div className="col-sm-2 col-12 pl-lg-0">
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