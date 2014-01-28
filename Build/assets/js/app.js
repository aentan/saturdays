$(function(){

  // Backgrounds
  $('#masthead, .benefit').each(function() {
    $b = $(this);
    if ($b.data('background')) {
      $b.backstretch($b.data('background'));
    }
  });
  
  $('.home-activity').imagefill();

});