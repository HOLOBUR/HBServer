const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cookie =  require("js-cookie");

const app = express();



const auth = require('./../controllers/auth');

const config = require('../../config/config');
app.set('llave', config.llave);



function generateToken() {
  const payload = {
    check:  true
  };
  
  const token = jwt.sign(payload, app.get('llave'), {
    expiresIn: 1440
  });
  console.log(token)
  Cookie.set("token", token);
  const token1 =  Cookie.get("token") ? Cookie.get("token") : null;
  console.log(token1);
  
}

router.use('/secure', function(req, res, next) {
  var token = req.headers['authorization']
  if (!token) {
    res.status(401).send({
      ok: false,
      message: 'Invalid token' 
    })
  }
  token = token.replace('Bearer ', '')
  jwt.verify(token, 'password', function(err, token) {
    if (err) {
      return res.status(401).send({
        of: false,
        message: 'Invalid token'
      });
    } else {
      req.token = token
      next();
    }
  });
});

const rutasProtegidas = express.Router(); 

rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });
 router.get('/datos', rutasProtegidas, (req, res) => {
  const datos = [
   { id: 1, nombre: "Asfo" },
   { id: 2, nombre: "Denisse" },
   { id: 3, nombre: "Carlos" }
  ];
  
  res.json(datos);
 });

router.get('/test', (req, res) => {
    res.send('Test');
    console.log('test');
});

router.post('/signup', auth.signUp, function(req, res) {
  
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  pool.query(
    "SELECT * FROM users WHERE username = ?;",
    username,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            //console.log(req.session.user);
            res.send(result);
            generateToken(result)

          } else {
            res.send({ message: "Wrong username/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

router.post('/auth', (req, res) => {
  if(req.body.username === "asfo" && req.body.password === "holamundo") {
    const payload = {
      check:  true
    };
    
    const token = jwt.sign(payload, app.get('llave'), {
      expiresIn: 1440
    });
    res.json({
      mensaje: 'Autenticación correcta',
      token: token
    });
  } else {
          res.json({ mensaje: "Usuario o contraseña incorrectos"})
      }
  console.log(req.body.username);
 });

module.exports = router;

