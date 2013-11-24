$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        var descs = {};
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
            descs[activities[i].id] = activities[i]            
        }

        $('.logo').mouseover(function() {
          var id = event.target.id;
          var detail = '<h2>' + descs[id].title + '</h2>';
          if (descs[id].logo !== undefined){
              detail += '<img class="log" src="' + descs[id].logo + '"> '
            };        
          detail += descs[id].desc;
          if (descs[id].pic !== undefined){ 
              detail += '<img class="pic" src="' + descs[id].pic + '">';
          }          
          $('#item_detail').html(detail);
          $('#item_detail').css("visibility","visible");           
        });

        $('.logo').mouseout(function() {       
            $('#item_detail').css("visibility","hidden");
        });     
    });
});
