import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
//import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Welcome from "./components/welcome.component"

function App() {
  return (
    <Router>
      
      <Route path="/" exact component={Welcome} />
      <Route path="/user" component={CreateUser} />
      
    </Router>
  );
}

export default App;
