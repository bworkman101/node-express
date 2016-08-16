runFibonacci = function(iterations) {
  $.getJSON('/math/fibonacci/' + iterations, function(response) {
      $("#fibonacciResult").html(response.result);
  });
}

$(function() {

  $('#fibonacciBtn').click(function() {
    runFibonacci($('#iterationsTxt').val());
  });

});
