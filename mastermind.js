(function () {
  var theSecretCode = '1234';  // TODO: Generate a random code.

  function compare(guessedCode, secretCode) {
    // TODO: Implement.
    return {
      right: false,
      hitCount: 0,
      blowCount: 0
    }
  }

  function log(message) {
    var $line = $('<div class="line"></div>');
    $line.text(message);
    $('#message').prepend($line);
  }

  $('#answer').click(function () {
    log($('#guessed-code').val());  // TODO: Show a proper message.
  });

  $('#console form').submit(function (e) {
    $('#answer').click();
    e.preventDefault();
  });
})();
// vim: expandtab softtabstop=2 shiftwidth=2
