$(function(){

  // Backgrounds
  $('.masthead, .benefit, .item-image').each(function() {
    $b = $(this);
    if ($b.data('background')) {
      $b.backstretch($b.data('background'));
    }
  });
  
  $('.home-activity').imagefill();

});