// Imports
const mongoose = require('mongoose');
const express = require('express');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');


// setup connection with the MongoDB
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

//sets up Express web framework 
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => res.send("Hello World"));
app.use("/api/users", users); // give access to methods and APIs from user.js

// tell app which port to run on, production port or localhost:5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

