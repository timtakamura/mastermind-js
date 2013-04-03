(function () {
  function log(message) {
    var $line = $('<div class="line"></div>');
    $line.text(message);
    $('#message').prepend($line);
  }

  $('#answer').click(function () {
    log($('#guessed-code').val());  // TODO: Show a proper message.
  });
})();
// vim: expandtab softtabstop=2 shiftwidth=2
