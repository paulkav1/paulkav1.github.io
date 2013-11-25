$(document).ready(function(){
  $.getScript("http://paulkav1.github.io/data.js", function(){
      var descs = {};
      for (var i = 0; i < activities.length; i++){
          activities[i].desc = descriptions[activities[i].id];
          descs[activities[i].id] = activities[i]
      }

      make_timeline(descs);

      $('.happening').mouseover(function() {
        var id = event.target.id;
        //if (descs[id].end_time < "2005"){
        if (event.pageX <450){          
          $('#item_detail').css("left","550px"); 
        }else{
          $('#item_detail').css("left","20px");           
        }
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

//      $('.happening').mouseout(function() {       
//          $('#item_detail').css("visibility","hidden");
//      });         
  });
});

function make_timeline(descs){
  var ht_str = '';
  var order = 0;
  var css_items = []
    for (item in descs){
      dim = plot_data(descs[item].start_time, descs[item].end_time, order);
      ht_str += '<div style="font-size:14px; border:1px solid grey; font-family:times; padding:2px; position:fixed; '
        + 'background-color:ivory; color:black; border-radius:3px; left:' + dim.l + 'px; width:' 
        + dim.w + 'px; top:' + dim.t + 'px" class="happening" id="' + descs[item].id + '">' + descs[item].title + '</div>';
      order += 1;
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
