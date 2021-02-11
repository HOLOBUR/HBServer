//
//  TUTORIAL GRAPHQL
//  https://www.howtographql.com/graphql-js/1-getting-started/
//

var path = require('path');
var express = require('express');
require('dotenv').config();

// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
//app.use(require('./routes/index'));
//app.use(require('./routes/authentication'));
app.use('/egala', require('./routes/egala'));
app.use('/hbdash', require('./routes/hbdash'));
app.use('/graphql', require('./routes/graphql'));
// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Holobur Server is running on', app.get('port'));
});




//https://www.geeksforgeeks.org/run-python-script-node-js-using-child-process-spawn-method/

app.get('/name', callName); 
  
function callName(req, res) { 
      
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    var process = spawn('python',["./test.py", 
                            req.query.firstname, 
                            req.query.lastname] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
    } ) 
} 

