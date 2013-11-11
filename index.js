
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

function make_timeline(){
  var ht_str = '';
  var css_items = []
  for (var i = 0; i < activities.length; i++){
      item = activities[i];
      p1 = map_log(item["start_time"]);
      p2 = map_log(item["end_time"]);      
      ht_str += '<div class="happening" id="' + item["id"] + '">' + item["id"] + ':' + p1 + ',' + p2 + ' ==> ' + item["title"] + '</div>';
      css_item = {left:p1, right:p2};
      css_items.push(css_item);
  };
  $('#canvas').html(ht_str);
  for (item in css_items){
      $(item).css('left', item.left);
      $(item).css('length', item.right - item.left);
  }
}

//Map years to log scale given 1953 = 0, 2013 = 900
function map_log(t){
  tx = 2014 - t;
  ltx = Math.log(tx) * 218;
  return Math.floor(900 - ltx);
}
