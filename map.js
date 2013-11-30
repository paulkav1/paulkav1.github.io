var markers = [];

$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        var descs = {};
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
            descs[activities[i].id] = activities[i]            
        }
        build_markers();
        init_map(descs);
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

function build_markers(){
    markers = [];
    var j = 0;
    for (var i = 0; i < activities.length; i++){
        if (activities[i].lat !== undefined){
            if (!isNaN(activities[i].lat) && !isNaN(activities[i].lng)){
                markers[j] = {"pos":new google.maps.LatLng(activities[i].lat, activities[i].lng), "desc":activities[i].desc, "title":activities[i].title};
                j++;
            }
        }
    };
};

//build the Google map
function init_map(descs) {
    var mapOptions = {center: new google.maps.LatLng(38.0, -95.0), zoom: 5, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("canvas"), mapOptions);
    set_map_markers(map, descs);
    map.fitBounds(get_map_bounds());
};

function set_map_markers(map, descs){
    var infowindow = new google.maps.InfoWindow({content: "...."});

    for (var i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({position:markers[i]["pos"], map:map, title:markers[i]["title"], desc:markers[i]["desc"]});             
        google.maps.event.addListener(marker, "mouseover", function(){
            var detail = '<div id="iw"><h2>' + this.title + '</h2>' + this.desc + '</div>'
            infowindow.setContent(detail);
            infowindow.open(map, this);
        });   
        marker.setMap(map);
    }
};

function get_map_bounds(){
    var bounds = new google.maps.LatLngBounds();
    $.each(markers, function (index, marker) {
        bounds.extend(marker.pos);
    });
    return bounds;
};
