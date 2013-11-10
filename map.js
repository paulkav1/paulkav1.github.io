var activities2 = [];
var descriptions2 = [];
var markers = [];

$.getScript("http://paulkav1.github.io/data.js", function(){
    activities2 = activities;
    descriptions2 = descriptions;
    alert(JSON.stringify(descriptions2));    
    build_markers();
    google.maps.event.addDomListener(window, 'load', init_map);     
});

function build_markers(){
    markers = [];
    alert(JSON.stringify(descriptions2));
    var j = 0;
    for (var i = 0; i < activities2.length; i++){
        if (!isNaN(activities2[i].lat) && !isNaN(activities2[i].lng)){
            var desc = descriptions2[activities2[i]["id"]];
            alert(desc);
            markers[j] = {"pos":new google.maps.LatLng(activities2[i].lat, activities2[i].lng), "title":activities2[i].title, "desc":desc};
            j++;
        }
    };
};

//build the Google map
function init_map() { 
    var mapOptions = {center: new google.maps.LatLng(38.0, -95.0), zoom: 5, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
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
