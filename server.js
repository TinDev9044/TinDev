const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");

require('dotenv').config();

//for starting server
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
// Setting up basic middleware for all Express requests
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses


//setting database link to mongodb Atlas
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//setting files containing all the urls
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const confirmationRouter = require('./routes/confirmation');
const personalInfoRouter = require('./routes/personalInfo');
const qualificationInfoRouter = require('./routes/qualificationInfo');
const skillsImageRouter = require('./routes/skillsImage');
const skillsInfoRouter = require('./routes/skillsInfo');
const certificationsInfoRouter = require('./routes/certificationsInfo');
const socialInfoRouter = require('./routes/socialInfo');

//setting the child urls to parent urls
app.use(express.static(path.join(__dirname, "client", "build")))
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/confirmation', confirmationRouter);
app.use('/personalInfo', personalInfoRouter);
app.use('/qualificationInfo', qualificationInfoRouter);
app.use('/skillsImage', skillsImageRouter);
app.use('/skillsInfo', skillsInfoRouter);
app.use('/certificationsInfo', certificationsInfoRouter);
app.use('/socialInfo', socialInfoRouter);


//heroku added
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
