var path = require('path');
var express = require('express');
require('dotenv').config();
var {PythonShell} = require('python-shell');

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
//app.use(require('./routes/index'));
//app.use(require('./routes/authentication'));
app.use('/egala', require('./routes/egala'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server starts in port', app.get('port'));
});




