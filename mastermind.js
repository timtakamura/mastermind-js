(function () {
  function generateSecretCode(codeLength) {
    var availableDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var secretCode = [];
    for (var i = 0; i < codeLength; i++) {
      var j = Math.floor(Math.random() * availableDigits.length);
      secretCode.push(availableDigits[j]);
      availableDigits.splice(j, 1);
    }

    return secretCode;
  }

  function compare(guessedCode, secretCode) {
    // Assumption: A code doesn't have duplicated characters.
    var hitCount = 0;
    for (var si = 0; si < secretCode.length; si++)
    {
      if (secretCode[si] == guessedCode[si])
        hitCount++;
    }

    var blowCount = 0;
    for (var si = 0; si < secretCode.length; si++)
    {
      if (secretCode[si] == guessedCode[si])
        continue;
      for (var gi = 0; gi < guessedCode.length; gi++)
      {
        if (secretCode[si] == guessedCode[gi])
          blowCount++;
      }
    }

    return {
      right: hitCount == secretCode.length,
      hitCount: hitCount,
      blowCount: blowCount
    }
  }

  function log(message) {
    var $line = $('<div class="line text-center"></div>');
    $line.text(message);
    $('#message').prepend($line);
  }

  var theSecretCodeLength = 4;
  var theSecretCode;

  function startNewGame() {
    theSecretCode = generateSecretCode(theSecretCodeLength);
  }

  $('#answer').click(function () {
    var guessedCode = $('#guessed-code').val();
    if (guessedCode.length != theSecretCode.length) {
      log(
        'The secret code consists of ' + theSecretCode.length + ' digits.' +
        '  Please answer a code with the same length.'
      );
      return;
    }

    var result = compare(guessedCode, theSecretCode);
    log(
      guessedCode +
      ' \u21d2 ' +
      result.hitCount + ' hit(s), ' +
      result.blowCount + ' blow(s)'
    );
    if (result.right)
      log('Congratulations! You break the secret code!');
  });

  $('#console form').submit(function (e) {
    $('#answer').click();
    e.preventDefault();
  });

  startNewGame();
})();
// vim: expandtab softtabstop=2 shiftwidth=2
