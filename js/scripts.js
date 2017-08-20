("form#selection").submit(function(event) {
  var number = $("input#chosen").val();

  event.preventDefault();
for (var index = 1; index <= number; index += 1) {
  if(index % 3 === 0) {$("output").text("Ping");}

    else if (index % 5 === 0) {$("output").text("Pong");}

    else if (index % 15 === 0) {$("output").text("Ping-Pong");}

    else {$("#output").text(index);}

});
