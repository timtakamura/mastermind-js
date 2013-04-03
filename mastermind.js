(function () {
  function log(message) {
    var $line = $('<div class="line"></div>');
    $line.text(message);
    $('#message').prepend($line);
  }
})();
// vim: expandtab softtabstop=2 shiftwidth=2
