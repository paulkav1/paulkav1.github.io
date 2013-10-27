var activities = [
    {place:"Brinkley", lat:52.2, lng:0.485, start_time:"1953", end_time:"1971", brand:null, title:"Early Years", type:"personal", desc:null, pic:null},
    {place:"London", lat:51.501, lng:-0.126, start_time:"1980", end_time:"1981", brand:"images/lse_logo.jpg", title:"Advertising", type:"career", desc:null, pic:null},
    {place:"Madrid", lat:40.428, lng:-3.702, start_time:"1990", end_time:"1990", brand:"images/ibm_logo.jpg", title:"Training", type:"career", desc:null, pic:null},
    {place:"Paris", lat:48.860, lng:2.350, start_time:"1998", end_time:"1998", brand:null, title:"Fun", type:"personal", desc:null, pic:null},
    {place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1984", brand:null, title:"Board of Education", type:"career", desc:null, pic:null}    
];
var markers = [];

function process_list(){
    markers = [];

    for (var i = 0; i < activities.length; i++){
        var pos = new google.maps.LatLng(activities[i].lat, activities[i].lng);  
        markers[i] = {"pos":pos, "title":activities[i].title, "desc":activities[i].desc};
    };
    make_list();
};

function make_list(){
    var list_html = "<ul>";
    for (var i = 0; i < activities.length; i++){
        list_html += '<li class="item">' + activities[i]["start_time"] + '-' + activities[i]["end_time"] + ': ' + activities[i]["title"] +'</li>';
    };
    list_html += "</ul>";
    //alert(list_html);
    $('#item_list').html(list_html); 
};

process_list();
