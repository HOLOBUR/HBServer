const express = require('express');
const router = express.Router();



router.get('/status', (req, res) => {
  console.log('OK');
  res.json({status: 'OK'})
});


module.exports = router;