(function () {
  var theSecretCode = '1234';  // TODO: Generate a random code.

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

  $('#answer').click(function () {
    var guessedCode = $('#guessed-code').val();
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
})();
// vim: expandtab softtabstop=2 shiftwidth=2
