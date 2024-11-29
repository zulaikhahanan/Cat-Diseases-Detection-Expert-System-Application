/********************************* Dependencies @ Libraries ***************************************/
//Express
const express = require("express");
const app = express()

//Session
const session = require('express-session');

//Mongoose
const mongoose = require('mongoose');

//Port
const { envPort, dbURL, sessionKey } = require('./backend/config/config');

//Body Parser
const bodyParser = require('body-parser');
/*************************************************************************************************/

//Database Connection
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));

//Time
var date_time = new Date();
console.log('Cat Diseases Detection Expert System Currently Working Now :'+date_time);

//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);

//Port
const port = envPort || 8000;
app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});

//Statics
app.use(express.static('images'));

//Routes 
