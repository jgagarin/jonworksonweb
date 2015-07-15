(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
      
    //progressbar values    
  $(".progressbar-html").progressbar({
  value: 80
});
$('.progressbar-css').progressbar({
  value: 80
});
$('.progressbar-jq').progressbar({
  value: 70
});
$('.progressbar-js').progressbar({
  value: 60
});
$('.progressbar-sass').progressbar({
    value:50
});
$('.progressbar-ajax').progressbar({
    value: 50
});
$('.progressbar-rwd').progressbar({
    value: 50
});  

  }); // end of document ready
})(jQuery); // end of jQuery name space