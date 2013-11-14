$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
        }
        //make_list();

        $('.logo').mouseover(function() {
          var id = event.target.id;
          $('#item_detail').html(descriptions[id]);
          $('#item_detail').css("visibility","visible");           
        });

        $('.logo').mouseout(function() {       
            //$('#item_detail').css("visibility","hidden");
        });     
    });
});
