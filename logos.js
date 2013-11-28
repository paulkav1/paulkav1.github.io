$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        var descs = {};
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
            descs[activities[i].id] = activities[i]            
        }

      $('.li_logo').mouseover(function(event) {
        var id = event.target.id;
        var detail = '';
        
        if (event.pageX <450){          
          $('#item_detail').css("left","550px"); 
        }else{
          $('#item_detail').css("left","20px");           
        }

        if (descs[id].logo !== undefined){
            detail += '<img class="log" src="' + descs[id].logo + '"> ';
        }else{ 
          detail += '<h2>' + descs[id].title + '</h2>';
        };               
        detail += descs[id].desc;
        if (descs[id].pic !== undefined){ 
            detail += '<img class="pic" src="' + descs[id].pic + '">';
        }
        $('#item_detail').html(detail);
        $('#item_detail').css("visibility","visible");           
      });

      $('.li_logo').mouseout(function() {       
          $('#item_detail').css("visibility","hidden");
      });

      $('#links').mouseover(function(event){
          $('#links_dropdown').css("visibility","visible");
      });

      $('#links_dropdown').mouseover(function(event){
          $('#links_dropdown').css("visibility","visible");
      });

      $('#links_dropdown').mouseout(function() {       
          $('#links_dropdown').css("visibility","hidden");
      });     
    });
});
