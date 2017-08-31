var pingPongGame = function(userInput) {
  var inputArray = [];
  if (userInput < 0) {
    for (var index = -1; index >= userInput; index--) {
      inputArray.push(index);       //Deal with user selection of negative number
    }
    inputArray.forEach(function(number) {
      if (number % 15 === 0) {
        numberArray[number-1] = 'pingpong';
      }
      else if (number % 3 === 0) {
        numberArray[number-1] = 'ping';
      }
      else if (number % 5 === 0) {
        numberArray[number-1] = 'pong';
      }
    });
  }
}
  return numberArray;

  var showOutputOL = function(outputArray) {
    $('ul#result').empty();
    outputArray.forEach(function(item) {
      ('ul#result').append('<li>' + item + '</li>');
    });
    return;
  }

  $(document).ready(function() {
    $('form#gameInput').submit(fumction(event)) {
      var userNumber = $('input#userInput').val();

      showOutputOL(pingPongGame(userInput));

      vent.preventDefault();
    });
  });
