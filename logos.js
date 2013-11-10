var activities2 = [];

$.getScript("http://paulkav1.github.io/data.js", function(){
    activities2 = activities;
    for (var i = 0; i <activities.length; i++){
        activities2[i].desc = descriptions[activities[i].d]
    }
    make_list(); 
});

function make_list(){
    var list_html = "<ul>";
    for (var i = 0; i < activities2.length; i++){
        list_html += '<li class="item">' + activities2[i]["start_time"] + '-' + activities2[i]["end_time"] + ': ' + activities2[i]["title"] + '==> ' + activities2[i]["desc"] +'</li>';
    };
    list_html += "</ul>";
    $('#item_list').html(list_html); 
};