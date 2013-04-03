(function () {
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
