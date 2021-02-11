const express = require('express');
const router = express.Router();
var PythonShell = require('python-shell');


router.get('/status', (req, res) => {
  console.log('OK');
  res.json({
    Service: "eGala",
    status: 'OK'
  })
});

router.get('/private', (req, res) => {
  console.log('OK');
  res.json({
    Service: "eGala",
    status: 'OK'
  })
});

module.exports = router;