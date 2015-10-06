$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();

    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
    // ryu goes back to his ready position
  });
});