import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
//import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Confirmation from "./components/confirmation.component";
import Welcome from "./components/welcome.component"
import PersonalInfo from "./components/create-profile-components/create-personalInfo.component"


function App() {
  return (
    <Router>
      
      <Route path="/" exact component={Welcome} />
      <Route path="/user" component={CreateUser} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/personalInfo" component={PersonalInfo} />
      
    </Router>
  );
}

export default App;
