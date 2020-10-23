
//  https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/

// https://www.youtube.com/watch?v=4WYpsgQyxRw&list=PLUdlARNXMVkk7E88zOrphPyGdS50Tadlr&index=16

require('dotenv').config()
const express = require('express')
const mysql = require('mysql')
const cors = require('cors');

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const pool = require('./database');
const config = require('../config/config');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
//app.set('llave', config.llave);

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    credentials: true,
  })
); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "chageForSafetySECRET",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// Global Variables


// Routes
//app.use(require('./routes'));
//app.use(require('./routes/auth'));
//app.use('/links', require('./routes/links'));
app.use('/hbserver', require('./routes/users'));

// Public

app.get('/test', (req, res) => {
    const username = req.body;
    console.log(username);
    console.log(password);
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
app.get('/', function(req, res) {
  res.send('Inicio');
})