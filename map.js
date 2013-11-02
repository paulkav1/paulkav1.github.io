var activities = [
    {place:"Brinkley", lat:52.2, lng:0.485, start_time:"1953", end_time:"1971", brand:null, title:"Early Years", type:"personal", desc:"activities.html#a10"},
    {place:"London", lat:51.501, lng:-0.126, start_time:"1980", end_time:"1981", brand:"images/lse_logo.jpg", title:"Advertising sales", type:"career", desc:"activities.html#a7"},
    {place:"Madrid", lat:40.428, lng:-3.702, start_time:"1990", end_time:"1990", brand:"images/ibm_logo.jpg", title:"Unix training", type:"career", desc:"activities.html#a1"},
    {place:"Paris", lat:48.860, lng:2.350, start_time:"1998", end_time:"1998", brand:null, title:"architecture and food", type:"personal", desc:"activities.html#a5"},
    {place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1984", brand:null, title:"Board of Education", type:"career", desc:"activities.html#a6"},    
    {place:"Adelaide", lat:-34.929, lng:138.601, start_time:"2011", end_time:"2011", brand:null, title:"Learning partnership", type:"career", desc:"activities.html#a2"},   
    {place:"San Francisco", lat:37.783, lng:-122.417, start_time:"1983", end_time:"2011", brand:null, title:"Various conferences", type:"career", desc:"activities.html#a1"},    
    {place:"Mexico City", lat:19.433, lng:-99.133, start_time:"1991", end_time:"1991", brand:"images/ibm_logo.jpg", title:"AIX Training", type:"career", desc:"activities.html#a5"}, 
    {place:"Vancouver", lat:49.25, lng:-123.10, start_time:"2007", end_time:"2007", brand:null, title:"Health consulting", type:"personal", desc:"activities.html#a5"},
    {place:"Dallas", lat:32.776, lng:-96.797, start_time:"1993", end_time:"1995", brand:"images/ms_logo.jpg", title:"IBM AIX training", type:"career", desc:"activities.html#a5"},   
    {place:"Fort Lauderdale", lat:26.136, lng:-80.142, start_time:"2007", end_time:"2009", brand:null, title:"Online university", type:"personal", desc:"activities.html#a2"},
    {place:"Miami", lat:25.787, lng:-80.224, start_time:"2006", end_time:"2007", brand:"images/kaplan_logo.jpg", title:"Spa and retail systems", type:"career", desc:"activities.html#a4"}, 
    {place:"Tampa", lat:27.91, lng:-82.465, start_time:"1996", end_time:"1998", brand:"images/ms_logo.jpg", title:"Microsoft consulting", type:"career", desc:"activities.html#a5"},   
    {place:"Atlanta", lat:33.755, lng:-84.39, start_time:"2007", end_time:"2007", brand:null, title:"Microsoft", type:"personal", desc:"activities.html#a5"},
    {place:"Delray Beach", lat:26.459, lng:-80.083, start_time:"2010", end_time:"2012", brand:"images/kaplan_logo.jpg", title:"University partnering", type:"career", desc:"activities.html#a2"}, 
    {place:"Hong Kong", lat:22.278, lng:114.159, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", title:"Online college", type:"career", desc:"activities.html#a2"},   
    {place:"Singapore", lat:1.300, lng:103.80, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", title:"Online college", type:"career", desc:"activities.html#a2"},    
    {place:"Delhi", lat:28.61, lng:77.23, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"Outsourcing development", type:"career", desc:"activities.html#a2"}, 
    {place:"Chicago", lat:41.882, lng:-87.628, start_time:"1993", end_time:"1995", brand:"images/ms_logo.jpg", title:"Microsoft consulting", type:"career", desc:"activities.html#a5"},   
    {place:"Lima", lat:-12.043, lng:-77.028, start_time:"2007", end_time:"2007", brand:null, title:"Llamas and ruins", type:"personal", desc:"activities.html#a10"},
    {place:"Istanbul", lat:41.014, lng:28.955, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"History tour", type:"career", desc:"activities.html#a10"}, 
    {place:"Tunis", lat:36.80, lng:10.183, start_time:"1993", end_time:"1995", brand:"images/ms_logo.jpg", title:"Tour stuff", type:"career", desc:"activities.html#a10"},   
    {place:"Crete", lat:35.21, lng:24.91, start_time:"2007", end_time:"2007", brand:null, title:"Moodle conference", type:"personal", desc:"activities.html#a2"},
    {place:"Raleigh", lat:35.819, lng:-78.645, start_time:"1992", end_time:"1993", brand:"images/kaplan_logo.jpg", title:"AIX support", type:"career", desc:"activities.html#a2"},    
    {place:"Monterrey", lat:25.667, lng:-100.3, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"Software outsourcing", type:"career", desc:"activities.html#a2"}, 
    {place:"Monterey", lat:36.6, lng:-121.9, start_time:"2011", end_time:"2011", brand:"images/ms_logo.jpg", title:"CSU", type:"career", desc:"activities.html#a5"},   
    {place:"Washington DC", lat:38.895, lng:-77.037, start_time:"1992", end_time:"1993", brand:null, title:"Executive info systems", type:"personal", desc:"activities.html#a10"},
    {place:"Nice", lat:43.703, lng:7.266, start_time:"1992", end_time:"1992", brand:"images/kaplan_logo.jpg", title:"IBM conference", type:"career", desc:"activities.html#a10"}, 
    {place:"Brisbane", lat:-27.468, lng:153.028, start_time:"2010", end_time:"2010", brand:"images/ms_logo.jpg", title:"Great Barrier Reef", type:"career", desc:"activities.html#a10"},   
    {place:"Sydney", lat:-33.86, lng:151.211, start_time:"2010", end_time:"2010", brand:null, title:"Kaplan online", type:"personal", desc:"activities.html#a2"}
    ];

var markers = [];

function process_list(){
    markers = [];

    for (var i = 0; i < activities.length; i++){
        markers[i] = {"pos":new google.maps.LatLng(activities[i].lat, activities[i].lng), "title":activities[i].title, "desc":activities[i].desc};
    };
    make_list();
    //init_map();
};

function make_list(){
    var list_html = "<ul>";
    for (var i = 0; i < activities.length; i++){
        list_html += '<li class="item">' + activities[i]["start_time"] + '-' + activities[i]["end_time"] + ': ' + activities[i]["title"] +'</li>';
    };
    list_html += "</ul>";
    $('#item_list').html(list_html); 
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
            infowindow.setContent('<a href="' + this.desc + '">' + this.title + '</a>');
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

process_list();
google.maps.event.addDomListener(window, 'load', init_map);