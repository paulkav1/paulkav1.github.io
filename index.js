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
          //$('#item_detail').css("visibility","hidden");
      });     
  });
});

function make_timeline(){
  var ht_str = '';
  var css_items = []
  for (var i = 0; i < activities.length; i++){
      item = activities[i];
      dim = plot_data(item["start_time"], item["end_time"], i);
      ht_str += '<div style="font-size:12px; font-family:times; padding:1px; position:fixed; background-color:maroon; color:white; left:' + dim.l 
        + 'px; width:' + dim.w + 'px; top:' + dim.t + 'px" class="happening" id="' + item["id"] + '">' + item["title"] + '</div>';
  };
  $('#canvas').html(ht_str);
}

//Map events to log scale given 1953 = 0, 2013 = 900
function plot_data(start, end, order){
  var e1 = Math.floor(960 - (Math.log(2014 - start) * 220));
  var e2 = Math.floor(960 - (Math.log(2014 - end) * 220));
  noise = (Math.random() * 20) - 10;
  var dim = {};
  if (e2 - e1 < 50){
    dim.w = 50; 
    dim.l = e1 - 50;
  } else {
    dim.w = e2 - e1;
    dim.l = e1;
  }
  dim.l += noise;
  dim.t = 150 + (16 * order);
 
  return dim;
}
