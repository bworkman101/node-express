var express = require('express');
var router = express.Router();
var models  = require('../models');

/* GET users listing. */
router.get('/fibonacci/:iterations', function(req, res, next) {
  
  var iterations = req.params.iterations;
  console.log('iterations ' + iterations);

  var data = new Object();
  models.Fibonacci.findOne({ where: {iterations: iterations} }).then(function(fibonacciDb) {
    if (!fibonacciDb) {
      console.log('no fibonacci result in database')
      data.result = fibonacci(0, iterations, 0, 1);
      models.Fibonacci.build({
        iterations: iterations,
        result: data.result 
      }).save();
    }
    else {
      console.log('using fibonacci in db ');
      data.result = fibonacciDb.result;
    }

    console.log('result ' + data.result);
    res.send(data);
  });
});

function fibonacci(idx, maxIteration, a, b) {
  if (idx == maxIteration) {
    return a
  }
  return fibonacci(idx + 1, maxIteration, b, a + b)
}

module.exports = router;
