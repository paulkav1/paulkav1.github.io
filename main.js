var markers = [];

// get the query string and suppress the submit action
function onSubmit(){
    var q = $('#query').val();
    querySearch(q);
    return false;
};

//call Noodle search - results goes to callback
function querySearch(q){
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = "http://devapi.noodle.org:8080/site2/search/auto-complete/" + q + "/";
    document.getElementsByTagName('head')[0].appendChild(scr);  
};

//process Noodle search (JSONP)
function callback(jsonData){
    markers = [];
    var o1 = jsonData["results"]["result"]["grouped"]["!n_key:lp*"]["doclist"];
    var os = [];
    for (var i = 0; i < o1["docs"].length; i++){
        os[i] = o1["docs"][i];
        var pos = new google.maps.LatLng(os[i]["geo_location_0_coordinate"],os[i]["geo_location_1_coordinate"]);
        var desc = os[i]["title"] + ": " + os[i]["description"];      
        markers[i] = {"pos":pos, "desc":desc, "title":os[i]["title"]};
    };
    make_list();
    init_map();
};

//display search results list (just titles)
function make_list(){
    var list_html = "<ul>";
    for (var i = 0; i < markers.length; i++){
        list_html += '<li class="item">' + markers[i]["title"] +'</li>';
    };
    list_html += "</ul>";
    $('#item_list').html(list_html); 
};

//build the Google map
function init_map() {
    var infowindow = new google.maps.InfoWindow({content: "...."}); 
    ctr = get_map_center(map);     
    var mapOptions = {center: ctr, zoom: 5, mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    set_map_markers(map, infowindow);
    map.fitBounds(get_map_bounds());
};

function get_map_center(){
    return new google.maps.LatLng(38.0, -95.0);
}

function set_map_markers(map, infowindow){
    for (var i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({position:markers[i]["pos"], map:map, title:markers[i]["title"], desc:markers[i]["desc"]});  
        google.maps.event.addListener(marker, "click", function(){  
            infowindow.setContent(this.desc);
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

// start of program
querySearch("colleges");
