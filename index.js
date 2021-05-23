$(document).ready(function(){
  $.getScript("http://paulkav1.github.io/data.js", function(){
      var descs = {};
      for (var i = 0; i < activities.length; i++){
          activities[i].desc = descriptions[activities[i].id];
          descs[activities[i].id] = activities[i]
      }
      make_timeline(descs);

      $('.happening').mouseover(function(event) {
        var id = event.target.id;
        
        if (event.pageX <450){          
          $('#item_detail').css("left","550px"); 
        }else{
          $('#item_detail').css("left","20px");           
        }

        $('#item_detail').html(build_detail(descs[id]));
        $('#item_detail').css("visibility","visible");           
      });

      $('.happening').mouseout(function() {       
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

function build_detail(d){
    var detail = ''; 

    if (d.logo !== undefined){
        detail += '<img class="log" src="' + d.logo + '"> ';
    } else {
        detail += '<h2>' + d.title + '</h2>';
    }

    detail += d.desc;
    if (d.pic !== undefined) {
        detail += '<img class="pic" src="' + d.pic + '">';
    }
    return detail;
}

function make_timeline(descs){
  var ht_str = '';
  var order = 0;
  var css_items = [];
    for (item in descs){
      dim = plot_data(order);
      ht_str += '<div style="font-size:14px; border:1px solid grey; font-family:times; padding:2px; position:fixed; '
        + 'background-color:ivory; color:black; border-radius:3px; left:' + dim.l + 'px; width:' 
        + dim.w + 'px; top:' + dim.t + 'px" class="happening" id="' + descs[item].id + '">' + descs[item].title + '</div>';
      order += 1;
  }
  $('#canvas').html(ht_str);
}

function plot_data(order){
    var dim = {};
    dim.w = 200;
    dim.l = 100;
    dim.t = 130 + (30 * order);
    return dim;
}
