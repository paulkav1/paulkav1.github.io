$(document).ready(function(){
  $.getScript("http://paulkav1.github.io/data.js", function(){
      for (var i = 0; i < activities.length; i++){
          activities[i].desc = descriptions[activities[i].id]
      }
      make_timeline();

      $('.happening').mouseover(function() {
        var id = event.target.id;
        $('#item_detail').html(descriptions[id]);
        $('#item_detail').css("visibility","visible");           
      });

      $('.happening').mouseout(function() {         
          $('#item_detail').css("visibility","hidden");
      });     
  });
});

function make_timeline(){
  var ht_str = '';
  var css_items = []
  for (var i = 0; i < activities.length; i++){
      item = activities[i];
      p1 = map_log(item["start_time"]);
      p2 = map_log(item["end_time"]); 
      w = Math.max((p2 - p1), 35); 
      t = 150 + (16 * i);    
      ht_str += '<div style="font-size:9px; font-style:times; position:fixed; background-color:maroon; color:white; left:' + p1 + 'px; width:' + w + 'px; top:' + t + 'px" class="happening" id="' + item["id"] + '">' + item["title"] + '</div>';
  };
  $('#canvas').html(ht_str);
}

//Map years to log scale given 1953 = 0, 2013 = 900
function map_log(t){
  tx = 2014 - t;
  ltx = Math.log(tx) * 220;
  return Math.floor(960 - ltx);
}
