$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
            descriptions[activities[i].id] = activities[i]            
        }

        $('.logo').mouseover(function() {
          var id = event.target.id;
          var detail = '<h2>' + descriptions[id].title + '</h2>' + descriptions[id].desc + '<img class="pic" src="' + descriptions[id].pic + '">';
          $('#item_detail').html(detail);
          $('#item_detail').css("visibility","visible");           
        });

        $('.logo').mouseout(function() {       
            //$('#item_detail').css("visibility","hidden");
        });     
    });
});
