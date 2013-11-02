$(document).ready(function(){
    $('.fun').mouseover(function() {
      $('.caption').css("visibility","visible");
    });

    $('.fun').mouseout(function() {
      $('.caption').css("visibility","hidden");
    });
})
