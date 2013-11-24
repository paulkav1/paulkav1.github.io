$(document).ready(function(){
  $.getScript("http://paulkav1.github.io/data.js", function(){
      for (var i = 0; i < activities.length; i++){
          activities[i].desc = descriptions[activities[i].id]
          descriptions[activities[i].id] = activities[i]
      }
      make_timeline();

      $('.happening').mouseover(function() {
        var id = event.target.id;
        var detail = '<h2>' + descriptions[id].title + '</h2>'
            + '<img class="log" src="' 
            + descriptions[id].logo + '"> '        
            + descriptions[id].desc 
            + '<img class="pic" src="' 
            + descriptions[id].pic + '">';
        $('#item_detail').html(detail);
        $('#item_detail').css("visibility","visible");           
      }); 
  });
});

function make_timeline(){
  var ht_str = '';
  var order = 0;
  var css_items = []
    for (var i = 0; i < activities.length; i++){
      var item = activities[i];
      dim = plot_data(item["start_time"], item["end_time"], i);
      ht_str += '<div style="font-size:14px; border:1px solid grey; font-family:times; padding:2px; position:fixed; '
        + 'background-color:ivory; color:black; border-radius:3px; left:' + dim.l + 'px; width:' 
        + dim.w + 'px; top:' + dim.t + 'px" class="happening" id="' + item["id"] + '">' + item["title"] + '</div>';
  };
  $('#canvas').html(ht_str);
}

//Map events to log scale given 1953 = 0, 2013 = 900
function plot_data(start, end, order){
  var e1 = Math.floor(960 - (Math.log(2014 - start) * 220));
  var e2 = Math.floor(960 - (Math.log(2014 - end) * 220));
  noise = (Math.random() * 20) - 10;
  var dim = {};
  if (e2 - e1 < 70){
    dim.w = 70; 
    dim.l = e1 - 60;
  } else {
    dim.w = e2 - e1;
    dim.l = e1;
  }
  dim.l += noise;
  dim.t = 120 + (42 * (order % 12));
 
  return dim;
}
