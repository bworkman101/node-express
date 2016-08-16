var express = require('express');
var router = express.Router();

router.get('/epoch', function(req, res, next) {
  data = new Object();
  data.epochTime = new Date().getTime();
  console.log('returning time since epoch ' + data.epochTime);
  res.send(data);
});

module.exports = router;
