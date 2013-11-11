$.getScript("http://paulkav1.github.io/data.js", function(){
    for (var i = 0; i < activities.length; i++){
        activities[i].desc = descriptions[activities[i].id]
    }
    make_list();

    $('.li_logo').mouseover(function() {
      var id = event.target.id;
      $('#item_detail').html(descriptions[id]);
      $('#item_detail').css("visibility","visible");           
    });

    $('.li_logo').mouseout(function() {     
        var id = event.target.id;
        $('#item_detail').html(descriptions[id]);        
        $('#item_detail').css("visibility","hidden");
    });     
});

function make_list(){
    var list_html = "<ul>";
    for (var i = 0; i < activities.length; i++){
        list_html += '<li class="item">' + activities[i]["start_time"] + '-' + activities[i]["end_time"] + ': ' + activities[i]["title"] + activities[i].desc +'</li>';
    };
    for (item in descriptions){
        list_html += '<li class="item">' + item + ':' + descriptions[item] + '</li>';
    };    
    list_html += "</ul>";
    $('#item_list').html(list_html); 
};
