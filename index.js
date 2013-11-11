
$.getScript("http://paulkav1.github.io/data.js", function(){
    alert("hey");
    for (var i = 0; i < activities.length; i++){
        activities[i].desc = descriptions[activities[i].id]
    }
    make_timeline();

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

function make_timeline(){
  var ht_str = '';
  for (var i = 0; i < activities.length; i++){
      item = activities[i];
      p1 = map_log(item["start_time"]);
      p2 = map_log(item["end_time"]);      
      ht_str += '<div class="happening" id="' + item["id"] + '">' + item["id"] + ':' + p1 + ',' + p2 + ' ==> ' + item["title"] + '</div>';
  };
  $('#canvas').html(ht_str);
  window.alert("@@@@" + ht_str);
}

//Map years to log scale given 1953 = 0, 2013 = 900
function map_log(t){
  tx = 2014 - t;
  ltx = Math.log(tx) * 218;
  return Math.floor(900 - ltx);
}
