var activities = [
    {title:"Early years", place:"Brinkley", lat:52.2, lng:0.485, start_time:"1953", end_time:"1971", brand:"images/brinkley.jpg, type:"personal", id:"a1"},
    {title:"Nottingham University", place:"Nottingham", lat:52.95, lng:-1.133, start_time:"1973", end_time:"1976", brand:"images/nottingham.jpg, type:"career", id:"e6"},    
    {title:"Advertising sales", place:"London", lat:51.501, lng:-0.126, start_time:"1977", end_time:"1979", brand:"images/publicis_logo.jpg", type:"career", id:"a2"},
    {title:"BAe Systems", place:"London", lat:51.372, lng:-0.453, start_time:"1979", end_time:"1981", brand:"images/tornado.jpg", type:"career", id:"d9"},
    {title:"AGS", place:"NYC", lat:40.714, lng:-73.961, start_time:"1984", end_time:"1988", brand:"images/ntt_logo.jpg", type:"career", id:"d8"}, 
    {title:"NYC DoE", place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1984", brand:"images/doe_logo.jpg", type:"career", id:"a5"},    
    {title:"COBOL", place:"NYC", lat:40.714, lng:-73.961, start_time:"1988", end_time:"1989", brand:"images/cobol.jpg", type:"career:", id:"e5"},
    {title:"AIX training", place:"Mexico City", lat:19.433, lng:-99.133, start_time:"1991", end_time:"1991", brand:"images/rs6000.jpg", type:"career", id:"a8"}, 
    {title:"IBM AIX", place:"Dallas", lat:32.776, lng:-96.797, start_time:"1990", end_time:"1994", brand:"images/ibm_logo.jpg", type:"career", id:"b1"},   
    {title:"AIX support", place:"Raleigh", lat:35.819, lng:-78.645, start_time:"1992", end_time:"1993", brand:"images/ibm_logo.jpg", type:"career", id:"c7"},    
    {title:"IBM France", place:"Nice", lat:43.703, lng:7.266, start_time:"1992", end_time:"1992", brand:"images/rs6000.jpg", type:"career", id:"d2"},
    {title:"Unix training", place:"Madrid", lat:40.428, lng:-3.702, start_time:"1990", end_time:"1990", brand:"images/ibm_logo.jpg", type:"career", id:"a3"},
    {title:"Microsoft", place:"Chicago", lat:41.882, lng:-87.628, start_time:"1993", end_time:"1995", brand:"images/burger.jpg", type:"career", id:"c2"},   
    {title:"AGS/NTT", place:"Mountainside", lat:40.681, lng:-74.36, start_time:"1993", end_time:"1994", brand:"images/ntt_logo.jpg", type:"career", id:"d7"},
    {title:"De Paul", place:"Chicago", lat:41.882, lng:-87.628, start_time:"1994", end_time:"1996", brand:"images/depaul_logo.jpg", type:"career", id:"e7"},
    {title:"Client/Server", place:"NJ", lat:40.681, lng:-74.36, start_time:"1994", end_time:"1994", brand:"images/cliserv.jpg", type:"career:", id:"e3"},
    {title:"Microsoft", place:"Tampa", lat:27.91, lng:-82.465, start_time:"1996", end_time:"1998", brand:"images/darden_logo.jpg", type:"career", id:"b5"},   
    {title:"Microsoft", place:"Atlanta", lat:33.755, lng:-84.39, start_time:"1999", end_time:"2000", brand:"images/ms_logo.jpg", type:"career", id:"b6"},
    {title:"Health consulting", place:"Vancouver", lat:49.25, lng:-123.10, start_time:"2002", end_time:"2002", brand:"images/ms_logo.jpg", type:"career", id:"a9"},
    {title:"Med cruising", place:"Istanbul", lat:41.014, lng:28.955, start_time:"2003", end_time:"2003", brand:"images/istanbul.jpg, type:"personal", id:"c4"}, 
    {title:"Med cruising", place:"Tunis", lat:36.80, lng:10.183, start_time:"2004", end_time:"2004", brand:"images/istanbul.jpg, type:"personal", id:"c4"},   
    {title:"Open Source", place:"Fort Lauderdale", lat:26.136, lng:-80.142, start_time:"2004", end_time:"2004", brand:"images/opensrc.jpg", type:"career:", id:"e2"},        
    {title:"Consulting", place:"Miami", lat:25.787, lng:-80.224, start_time:"2002", end_time:"2004", brand:"images/elemis.gif", type:"career", id:"b4"}, 
    {title:"Kaplan", place:"Fort Lauderdale", lat:26.136, lng:-80.142, start_time:"2004", end_time:"2008", brand:"images/kaplan_logo.jpg", type:"career", id:"b2"},
    {title:"Peru", place:"Lima", lat:-12.043, lng:-77.028, start_time:"2007", end_time:"2007", brand:"images/mapi.jpg", type:"personal", id:"c3"},
    {title:"CSU", place:"Monterey", lat:36.6, lng:-121.9, start_time:"2011", end_time:"2011", brand:"images/csumb.jpg", type:"career", id:"c9"},   
    {title:"Colloquy", place:"Delray Beach", lat:26.459, lng:-80.083, start_time:"2010", end_time:"2012", brand:"images/colloquy.jpg", type:"career", id:"b7"}, 
    {title:"Online college", place:"Hong Kong", lat:22.278, lng:114.159, start_time:"2010", end_time:"2010", brand:"images/kaplan_logo.jpg", type:"career", id:"b8"},   
    {title:"Online college", place:"Singapore", lat:1.300, lng:103.80, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", type:"career", id:"b9"},    
    {title:"Diving", place:"Brisbane", lat:-27.468, lng:153.028, start_time:"2010", end_time:"2010", brand:"images/scuba.jpg", type:"personal", id:"d3"},   
    {title:"Kaplan online", place:"Sydney", lat:-33.86, lng:151.211, start_time:"2011", end_time:"2011", brand:"images/kaplan_logo.jpg", type:"personal", id:"d4"},
    {title:"Outsourcing", place:"Delhi", lat:28.61, lng:77.23, start_time:"2010", end_time:"2010", brand:"images/delhi.jpg", type:"career", id:"c1"},
    {title:"Moodle conference", place:"Crete", lat:35.21, lng:24.91, start_time:"2007", end_time:"2007", brand:"images/moodle_logo.jpg", type:"personal", id:"c6"},
    {title:"Adelaide U", place:"Adelaide", lat:-34.929, lng:138.601, start_time:"2010", end_time:"2011", brand:"images/adelaide_logo.jpg", type:"career", id:"a6"},      
    {title:"LSE", place:"London", lat:51.501, lng:-0.126, start_time:"2010", end_time:"2013", brand:"images/lse_logo.jpg", type:"career", id:"e1"},
    {title:"Thinkful", place:"NYC", lat:40.714, lng:-73.961, start_time:"2013", end_time:"2013", brand:"images/thinkful.jpg, type:"career", id:"d5"}, 
    {title:"Noodle", place:"NYC", lat:40.714, lng:-73.961, start_time:"2012", end_time:"2013", brand:"images/noodle_logo.jpg", type:"career", id:"d6"}
];

var descriptions = {
a1:'<p>Born in Brinkley, near Newmarket. Dullingham primary school. High school: Perse, Cambridge.</p>',
a2:'<p>First job at Benton & Bowles (now Publicis), London advertising agency for Moet Chandon, Dewars, Kraft Foods, etc. Advertising buyer, then computer operations.</p>',
a3:'<p>Trained IBM systems engineers in Unix administration and networking</p>',
a5:'<p>Analyst/programmer using IBM mainframe (MVS, CICS) for payroll and HR programs for the NYC Department of Education</p>',
a6:'<p>Partnered with University on online business masters programs</p>',
a8:'<p>AIX networking training for IBM engineers in Mexico City</p>',
a9:'<p>Consulting for Microsoft on mobile (tablet) support at HealthSouth subsidiary in Vancouver</p>',
b1:'<p>Trained IBM engineers in AIX administration, networking, internals, etc. at Las Colinas training center and various partner locations</p>',
b2:'<p>Ran the KU student team of twenty US developers plus similar-sized groups of outsourced resources in India and Mexico. Managed admissions, academic advising, and financial aid systems, and launched a lead generation entity which is now part of Education Dynamics.</p>' +
      '<p>Leader of Kaplan migration from VB and traditional processes to C# and Scrum-based development.</p>' +
    '<p>Managed Kaplan’s selection of Pearson/eCollege as their learning management system, and created a team to integrate it. Led development of a Flash-based synchronous seminar for the Concord law school, now used across KU, and managed development of call center systems using Genesys software.</p>', 
b4:'<p>Worked with a Miami consulting firm on delivery and management of ERP integration systems including a distributed inventory system for spas on all major cruise lines, and a consumer product system for consignment sales of perfume at K-Mart retail sites. Also consulted to Office Depot on their store portal for all retail stores.</p>',
b5:'<p>As Managing Consultant in Florida, developed a consulting business serving enterprise customers with software development and operations/infrastructure services. Customers included American Express, Tech Data, Office Depot, Royal Caribbean, Carnival, Auto Nation, CSX, Harris, Florida state agencies, and dot-coms. Microsoft Consulting in Florida grew from two employees to forty, and major enterprise sales were made in several accounts.</p>',
b6:'<p>Application Development Customer Unit for Southeast sold through MSDN events for developers, relationships with software vendors and integrators, and line-of-business sales. Successes included large SQL Server adoptions at Darden (Red Lobster/Olive Garden), Publix, and agencies of the State of Florida. </p>',
b7:'<p>CTO for this Kaplan startup, offering online admissions and education services in support of partner universities and Kaplan colleges in Asia/Pacific. Clients include George Washington University, UT Austin, University College Dublin, and the<a href="http://mapm.adelaide.edu.au/index.php">University of Adelaide</a>.' +
      '<p>Created new team and systems running on Amazon AWS in Europe, Asia/Pacific and the US. Won a company innovation award for use of open source and cloud computing and served on the CIO Council. Amazon, Moodle, Salesforce.com, and Alfresco became corporate global standards.</p>',
b8:'<p>Installed customized version of Colloquy online education software in support of Kaplan college in Hong Kong</p>',
b9:'<p>Installed Colloquy online education software in support of Kaplan college in Singapore</p>',
c1:'<p>Worked with Kaplan in-house offshore software development center on various projects in New Delhi</p>',
c2:'<p>In Chicago, managed a profitable team supporting software development, architecture, and infrastructure engagements for major accounts including United Airlines, Kraft Foods and McDonald’s.</p>',
c3:'<p>Lima, Cuzco, and Macchu Pichu with the family: llamas and ruins</p>',
c4:'<p>Mediterranean: Istanbul mosques, palaces, and the Grand Bazaar. Tunis, Rhodes, on a mule in Santorini, Marseilles, Pompeii, Barcelona, Majorca, Naples...</p>',
c6:'<p>Attended Moodle research conference on e-learning in Crete</p>',
c7:'<p>Founded and ran a business in Raleigh, specializing in AIX (IBM UNIX). Trained IBM system engineers on UNIX and internet infrastructure in the USA, France, Spain, and Mexico, and consulted on development of a platform for telephone companies and a customer service system for the PC division.</p>',
c9:'<p>Partnering with California State University, Monterey Bay to offer MBAs</p>',
d2:'<p>Taught Unix internals to IBM France to support router development in Nice</p>',
d3:'<p>Scuba diving at Lady Elliott Island, Great Barrier Reef, near Brisbane</p>',
d4:'<p>Reviewing and supporting several Kaplan efforts in online learning in Sydney</p>',
d5:'<p>Thinkful Front End Web Development class. Built several small projects including:<ul>' +
      '<li><a href="http://paulkav1.github.io/mapper/">College Search</a></li><li><a href="http://paulkav1.github.io/quiz/">Quiz</a></li>' +       
      '<li><a href="http://paulkav1.github.io/cart/">Shopping List</a></li><li><a href="http://paulkav1.github.io/huckle/">Hot or Cold</a></li></ul></p>',
d6:'<p>CTO of <a href="http://www.noodle.org">an education search and recommendation web site</a> for a startup launched by the founder of The Princeton Review and 2U.' +
     'Replaced outsourced development with a NY-based team and developed a new IT architecture emphasizing Python, MongoDB, Solr, and a REST API.' +
     'Managing data acquisition, software development, and IT operations using Amazon cloud services.</p>',
d7:'<p>For AGS (now NTT Data), ran a division consulting on strategy, algorithms, and analytics for companies including IBM, Verizon, and Hoffmann-La Roche.</p>',
d8:'<p>Led AGS teams developing software for NYC area organizations including foreign exchange trading for BoA/Merrill Lynch, price reporting for CME Group, international funds transfer for JP Morgan Chase, computer leasing for IBM, ATM’s for RBS NatWest, and teacher/student management for the NYC Department of Education.</p>',
d9:'<p>For British Aerospace, developed systems on IBM mainframes to control production of combat (Tornado, Harrier) and civilian (Concorde, Airbus) aircraft. </p>',
e1:'<p>B.Sc. Information Systems & Management, University of London (LSE)</p>',
e2:'<p>Open Source Software published by Digital Press</p>',
e3:'<p>Downsizing to Client/Server published by Academic Press</p>',
e5:'<p>VS COBOL II for COBOL Programmers published by McGraw-Hill</p>',
e6:'<p>B.Sc. Mathematics, University of Nottingham</p> ',
e7:'<p>Continuing education class for De Paul University: Managing enterprise software development</p>'
}
