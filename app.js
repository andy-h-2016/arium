// Imports
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const waterTrackers = require('./routes/api/watertrackers');
const terrariums = require('./routes/api/terrariums');
const overallConsumptions = require('./routes/api/overallconsumptions');
const passport = require('passport');


// setup connection with the MongoDB
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  
  
  //sets up Express web framework 
  const app = express();
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());

  //production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

//passport setup 
app.use(passport.initialize()); //middleware for passport
require('./config/passport')(passport);

//routers
app.use("/api/users", users); // give access to methods and APIs from user.js
app.use("/api/watertrackers", waterTrackers); // give access to methods and APIs from watertrackers.js
app.use("/api/terrariums", terrariums);
app.use("/api/overallconsumptions", overallConsumptions);

// tell app which port to run on, production port or localhost:5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

