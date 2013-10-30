var activities = [
    {place:"Brinkley", lat:52.2, lng:0.485, start_time:"1953", end_time:"1971", brand:null, title:"Early Years", type:"personal", desc:"activities.html#a1"},
    {place:"London", lat:51.501, lng:-0.126, start_time:"1980", end_time:"1981", brand:"images/lse_logo.jpg", title:"Advertising sales", type:"career", desc:"activities.html#a1"},
    {place:"Madrid", lat:40.428, lng:-3.702, start_time:"1990", end_time:"1990", brand:"images/ibm_logo.jpg", title:"Unix training", type:"career", desc:"activities.html#a1"},
    {place:"Paris", lat:48.860, lng:2.350, start_time:"1998", end_time:"1998", brand:null, title:"Architecture and food", type:"personal", desc:"activities.html#a1"},
    {place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1984", brand:null, title:"Board of Education", type:"career", desc:"activities.html#a1"},    
    {place:"Adelaide", lat:-34.929, lng:138.601, start_time:"2011", end_time:"2011", brand:null, title:"Learning partnership", type:"career", desc:"activities.html#a1"},   
    {place:"San Francisco", lat:37.783, lng:-122.417, start_time:"1983", end_time:"2011", brand:null, title:"Various conferences", type:"career", desc:"activities.html#a1"},    
    {place:"Mexico City", lat:19.433, lng:-99.133, start_time:"1991", end_time:"1991", brand:"images/ibm_logo.jpg", title:"AIX Training", type:"career", desc:"activities.html#a5"}, 
    {place:"Hong Kong", lat:22.278, lng:114.159, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", title:"Online college", type:"career", desc:"activities.html#a1"},   
    {place:"Singapore", lat:1.300, lng:103.80, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", title:"Online college", type:"career", desc:"activities.html#a1"},    
    {place:"Delhi", lat:28.61, lng:77.23, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"Outsourcing development", type:"career", desc:"activities.html#a1"}, 
    {place:"Chicago", lat:41.882, lng:-87.628, start_time:"1993", end_time:"1995", brand:"images/ms_logo.jpg", title:"Microsoft consulting", type:"career", desc:"activities.html#a1"},   
    {place:"Lima", lat:-12.043, lng:-77.028, start_time:"2007", end_time:"2007", brand:null, title:"Llamas and ruins", type:"personal", desc:"activities.html#a1"},
    {place:"Istanbul", lat:41.014, lng:28.955, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"History tour", type:"career", desc:"activities.html#a1"}, 
    {place:"Tunis", lat:36.80, lng:10.183, start_time:"1993", end_time:"1995", brand:"images/ms_logo.jpg", title:"Tour stuff", type:"career", desc:"activities.html#a1"},   
    {place:"Crete", lat:35.21, lng:24.91, start_time:"2007", end_time:"2007", brand:null, title:"Moodle conference", type:"personal", desc:"activities.html#a1"},
    {place:"Barbados", lat:13.167, lng:-59.55, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", title:"Cruise line", type:"career", desc:"activities.html#a5"}, 
    {place:"Vancouver", lat:49.25, lng:-123.10, start_time:"2007", end_time:"2007", brand:null, title:"Health consulting", type:"personal", desc:"activities.html#a1"}
];
var markers = [];

function process_list(){
    markers = [];

    for (var i = 0; i < activities.length; i++){
        var pos = new google.maps.LatLng(activities[i].lat, activities[i].lng);  
        markers[i] = {"pos":pos, "title":activities[i].title, "desc":activities[i].desc};
    };
    make_list();
    //alert(JSON.stringify(activities[0], null, 4));
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
