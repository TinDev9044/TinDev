import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return (<div className="col-lg-4 col-md-6" style={{marginTop:"10px"}}>
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-animation="autohide">
      <div className="toast-header">
      <img src="../assets/img/theme/bootstrap.jpg" className="rounded mr-2" alt="..."/>
        <strong className="mr-auto">{item.techName}</strong>
        <button type="button" className="ml-2 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>)
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
    <>
        {listItems}
    </>
          
      
    );
  }
};
 
export default TodoItems;