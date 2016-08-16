var getTime = function() {
  $.getJSON('/time/epoch', function(data) {
    $("#epochTime").html(data.epochTime);
  });
}

$(function() {

  getTime();

  $('#refreshTimeBtn').click(function() {
    getTime();
  });

});

