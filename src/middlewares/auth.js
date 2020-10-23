const jwt = require('jsonwebtoken');
const moment = require('moment');

const config = require('../../config/config');

function isAuth (req, res, next) {
    if(!req.headers.authorization) {
        return res.status(403).send({ message: "Not Auth" })
    }
    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN);

    if (payload.exp)
}

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