var markers = [];

$(document).ready(function(){
    $.getScript("http://paulkav1.github.io/data.js", function(){
        for (var i = 0; i < activities.length; i++){
            activities[i].desc = descriptions[activities[i].id]
        }  
        build_markers();
        google.maps.event.addDomListener(window, 'load', init_map);     
    });
});

function build_markers(){
    markers = [];
    var j = 0;
    for (var i = 0; i < activities.length; i++){
        if (!isNaN(activities[i].lat) && !isNaN(activities[i].lng)){
            markers[j] = {"pos":new google.maps.LatLng(activities[i].lat, activities[i].lng), "title":activities[i].title, "desc":activities[i].desc};
            j++;
        }
    };
};

//build the Google map
function init_map() { 
    var mapOptions = {center: new google.maps.LatLng(38.0, -95.0), zoom: 5, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("canvas"), mapOptions);
    set_map_markers(map);
    map.fitBounds(get_map_bounds());
};

function set_map_markers(map){
    var infowindow = new google.maps.InfoWindow({content: "...."});

    for (var i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({position:markers[i]["pos"], map:map, title:markers[i]["title"], desc:markers[i]["desc"]});        
        google.maps.event.addListener(marker, "mouseover", function(){  
            infowindow.setContent('<b>' + this.title + '</b><p>' + this.desc + '</p>');
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
