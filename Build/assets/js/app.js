$(function(){
  
  // Masthead wallpaper
  $("#masthead").backstretch("assets/img/wallpaper.png");
  $("#masthead-biz").backstretch("assets/img/wallpaper_biz2.jpg");

  // Benefit backgrounds
  $('.benefit').each(function() {
    $b = $(this);
    if ($b.data('background')) {
      $b.backstretch($b.data('background'));
    }
  });
  
  $('.home-activity').imagefill();

});