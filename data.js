var activities = [
    {title:"BAe Systems", place:"London", lat:51.372, lng:-0.453, start_time:"1979", end_time:"1981", pic:"images/tornado.jpg", logo:"logos/bae_logo.jpg", id:"d9"},
    {title:"AGS", place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1993", logo:"logos/verizon_logo.jpg", pic:"images/prices.jpg", id:"d8"},
    {title:"NYC DoE", place:"NYC", lat:40.714, lng:-73.961, start_time:"1981", end_time:"1984", pic:"images/NY_boroughs.jpg", logo:"logos/doe_logo.jpg", id:"a5"},    
    {title:"IBM Credit", place:"Stamford", lat:41.097, lng:-73.552, start_time:"1984", end_time:"1985", logo:"logos/ibm_logo.jpg", id:"a9"},
    {title:"NatWest USA", start_time:"1984", end_time:"1984", pic:"images/ml.jpg", logo:"logos/natwest_logo.jpg", id:"a8"},
    {title:"Merrill Lynch", start_time:"1985", end_time:"1987", pic:"images/ml.jpg", logo:"logos/ml_logo.jpg", id:"a3"},
    {title:"COBOL", start_time:"1988", end_time:"1989", pic:"images/cobol.jpg", id:"e5"},
    {title:"IBM AIX", place:"Mexico City", lat:19.433, lng:-99.133, start_time:"1990", end_time:"1994", pic:"images/rs6000.jpg", logo:"logos/ibm_logo.jpg", id:"b1"}, 
    {title:"IBM AIX", place:"Dallas", lat:32.776, lng:-96.797, start_time:"1990", end_time:"1994", pic:"images/rs6000.jpg", logo:"logos/ibm_logo.jpg", id:"b1"},   
    {title:"IBM AIX", place:"Raleigh", lat:35.819, lng:-78.645, start_time:"1990", end_time:"1994", pic:"images/rs6000.jpg", logo:"logos/ibm_logo.jpg", id:"b1"},    
    {title:"IBM AIX", place:"Nice", lat:43.703, lng:7.266, start_time:"1990", end_time:"1994", pic:"images/rs6000.jpg", logo:"logos/ibm_logo.jpg", id:"b1"},
    {title:"IBM AIX", place:"Madrid", lat:40.428, lng:-3.702, start_time:"1990", end_time:"1994", pic:"images/rs6000.jpg", logo:"logos/ibm_logo.jpg", id:"b1"},
    {title:"AGS", place:"Mountainside", lat:40.681, lng:-74.36, start_time:"1993", end_time:"1994", pic:"images/roche.jpg", logo:"logos/verizon_logo.jpg", id:"d7"},
    {title:"Microsoft", place:"Chicago", lat:41.882, lng:-87.628, start_time:"1994", end_time:"1996", pic:"images/burger.jpg", logo:"logos/ms_logo.jpg", id:"c2"},   
    {title:"United Airlines", start_time:"1994", end_time:"1996", pic:"images/united.jpg", logo:"logos/united_logo.jpg", id:"a4"},
    {title:"Client/Server", start_time:"1994", end_time:"1994", pic:"images/cliserv.jpg", id:"e3"},
    {title:"De Paul", place:"Chicago", lat:41.882, lng:-87.628, start_time:"1995", end_time:"1997", logo:"logos/depaul_logo.jpg", id:"e7"},
    {title:"Microsoft", place:"Tampa", lat:27.91, lng:-82.465, start_time:"1996", end_time:"1998", pic:"images/publix.jpg", logo:"logos/ms_logo.jpg",  id:"b5"}, 
    {title:"Darden", start_time:"1997", end_time:"1997", pic:"logos/darden_logos.jpg", id:"b3"},         
    {title:"Microsoft", place:"Atlanta", lat:33.755, lng:-84.39, start_time:"1999", end_time:"2000", logo:"logos/ms_logo.jpg", id:"b6"},
    {title:"Microsoft", place:"Fort Lauderdale", lat:26.136, lng:-80.14, start_time:"2000", end_time:"2004", logo:"logos/ms_logo.jpg", id:"b5"},
    {title:"Office Depot", start_time:"2000", end_time:"2002", pic:"images/od.jpg", logo:"logos/officedepot.jpg", id:"a7"},     
    {title:"Retail consulting", place:"Miami", lat:25.787, lng:-80.224, start_time:"2002", end_time:"2004", pic:"images/elemis.jpg", logo:"logos/elemis.jpg", id:"b4"}, 
    {title:"Med cruising", place:"Istanbul", lat:41.014, lng:28.955, start_time:"2003", end_time:"2003", pic:"images/istanbul.jpg", id:"c4"}, 
    {title:"Med cruising", place:"Tunis", lat:36.80, lng:10.183, start_time:"2004", end_time:"2004", pic:"images/istanbul.jpg", id:"c4"},   
    {title:"Open Source", start_time:"2004", end_time:"2004", pic:"images/opensrc.jpg", id:"e2"},        
    {title:"Kaplan", place:"Fort Lauderdale", lat:26.136, lng:-80.142, start_time:"2004", end_time:"2008", logo:"logos/ku_logo.jpg", id:"b2"},
    {title:"Peru", place:"Lima", lat:-12.043, lng:-77.028, start_time:"2007", end_time:"2007", pic:"images/mapi.jpg", id:"c3"},    
    {title:"Colloquy", place:"Delray Beach", lat:26.459, lng:-80.083, start_time:"2009", end_time:"2012", logo:"logos/colloquy.jpg", pic:"images/colloquy.jpg", id:"b7"}, 
    {title:"Kaplan Hong Kong", place:"Hong Kong", lat:22.278, lng:114.159, start_time:"2010", end_time:"2010", pic:"images/hongkong.jpg", logo:"logos/kaplan.jpg", id:"b8"},   
    {title:"Kaplan Singapore", place:"Singapore", lat:1.300, lng:103.80, start_time:"2011", end_time:"2011", pic:"images/singapore.jpg", logo:"logos/kaplan.jpg", id:"b9"},    
    {title:"Scuba diving", place:"Brisbane", lat:-27.468, lng:153.028, start_time:"2010", end_time:"2010", pic:"images/scuba.jpg", id:"d3"},
    {title:"Kaplan Australia", place:"Sydney", lat:-33.86, lng:151.211, start_time:"2011", end_time:"2011", pic:"images/adelaide.jpg", logo:"logos/kaplan.jpg", id:"d4"},
    {title:"Outsourcing", place:"Delhi", lat:28.61, lng:77.23, start_time:"2010", end_time:"2010", pic:"images/delhi.jpg", logo:"logos/kaplan.jpg", id:"c1"},
    {title:"Adelaide", place:"Adelaide", lat:-34.929, lng:138.601, start_time:"2010", end_time:"2011", logo:"logos/adelaide_logo.jpg", pic:"images/adelaideu.jpg", id:"a6"},
    {title:"LSE", place:"London", lat:51.501, lng:-0.126, start_time:"2010", end_time:"2013", logo:"logos/lse_logo.jpg", id:"e1"},
    {title:"Noodle", place:"NYC", lat:40.714, lng:-73.961, start_time:"2012", end_time:"2014", logo:"logos/noodle_logo.jpg", id:"d6"},
    {title:"Bank of America", place:"Charlotte", lat:35.22, lng:-80.84, start_time:"2014", end_time:"2014", pic:"images/boa.jpg", logo:"logos/boa_logo.jpg", id:"e8"}, 
    {title:"NextEra Energy", place:"Jupiter", lat:26.92, lng:-80.10, start_time:"2014", end_time:"2016", pic:"images/nextera.jpg", logo:"logos/nextera_logo.jpg", id:"e9"},
    {title:"Hearst Autos", place:"New York", lat:40.766, lng:-73.98, start_time:"2016", end_time:"2021", pic:"images/hearst_tower.jpg", logo:"logos/hearst_logo.jpg", id:"f1"}
];
var descriptions = {
    a3:'<p>Risk management system for Merrill Lynch.</p>',
    a4:'<p>Internet reservation system for United Airlines</p>',
    a5:'<p>Analyst/programmer using IBM mainframe (MVS, CICS) for payroll and HR programs for the NYC Department of Education</p>',
    a6:'<p>Partnered with the University of Adelaide on online masters programs in Business, Project Management, and Innovation and Entrepreneurship.</p>',
    a7:'<p>Internal portal for Office Depot, summarizing key sales data and plans. Used for daily huddle at 1000 retail stores.</p>',
    a8:'<p>ATM support for NatWest USA in Long Island</p>',
    a9:'<p>Developed reporting and analytics systems for IBM Credit Corporation in Stamford</p>',
    b1:'<p>Founded and ran a business in Raleigh, specializing in AIX (IBM UNIX).</p><p>Trained IBM engineers in AIX administration, networking, internals, etc. at Las Colinas training center in Texas and various international IBM and partner locations</p>',
    b2:'<p>Ran the KU student team of twenty US developers plus similar-sized groups of outsourced resources in India and Mexico.</p><p>Managed admissions, academic advising, and financial aid systems, and launched a lead generation entity which is now part of Education Dynamics.</p>' +
        '<p>Leader of Kaplan migration from VB and traditional processes to C# and Scrum-based development.</p>' +
        '<p>Managed Kaplan’s selection of Pearson/eCollege as their learning management system, and created a team to integrate it. Led development of a Flash-based synchronous seminar for the Concord law school, now used across KU, and managed development of call center systems using Genesys software.</p>',
    b3:'<p>Installed SQL Server as the store server in all Darden restaurants including Red Lobster, Olive Garden, and Bahama Breeze</p>',
    b4:'<p>Worked with a Miami consulting firm on delivery and management of ERP integration systems including a distributed inventory system for spas on all major cruise lines, and a consumer product system for consignment sales of perfume at K-Mart retail sites. Also consulted to Office Depot on their store portal for all retail stores.</p>',
    b5:'<p>As Managing Consultant in Florida, developed a consulting business serving enterprise customers with software development and operations/infrastructure services.</p>' +
        '<p>Customers included American Express, Burger King, Office Depot, Royal Caribbean, Carnival, Auto Nation, CSX, Harris, Florida state agencies, and dot-coms.</p>' +
        '<p>Microsoft Consulting in Florida grew from two employees to forty, and major enterprise sales were made in several accounts.</p>',
    b6:'<p>Application Development Customer Unit for Southeast sold through MSDN events for developers, relationships with software vendors and integrators, and line-of-business sales. Successes included large SQL Server adoptions at Darden (Red Lobster/Olive Garden), Publix, and agencies of the State of Florida. </p>',
    b7:'<p>CTO for this Kaplan startup, offering online admissions and education services in support of partner universities and Kaplan colleges in Asia/Pacific.</p>' +
        '<p>Clients include George Washington University, UT Austin, University College Dublin, and the University of Adelaide.' +
        '<p>Created new team and systems running on Amazon AWS in Europe, Asia/Pacific and the US. Won a company innovation award for use of open source and cloud computing and served on the CIO Council. Amazon, Moodle, Salesforce.com, and Alfresco became corporate global standards.</p>',
    b8:'<p>Installed customized version of Colloquy online education software in support of Kaplan college in Hong Kong</p>',
    b9:'<p>Installed Colloquy online education software in support of Kaplan college in Singapore</p>',
    c1:'<p>Worked with Kaplan in-house offshore software development center on various projects in New Delhi</p>',
    c2:'<p>In Chicago, managed a profitable team supporting software development, architecture, and infrastructure engagements for major accounts including United Airlines, Kraft Foods and McDonald’s.</p>',
    c3:'<p>Lima, Cuzco, and Macchu Pichu with the kids: llamas and ruins</p>',
    c4:'<p>Mediterranean -- Istanbul mosques, palaces, and the Grand Bazaar. Shopping in Tunis and Rhodes</p>' +
        '<p>On a mule in Santorini, Marseilles, Pompeii, Barcelona, Majorca, Naples</p>',
    c6:'<p>Attended Moodle research conference on e-learning in Crete</p>',
    d3:'<p>Scuba diving at Lady Elliott Island, Great Barrier Reef, near Brisbane</p>',
    d4:'<p>Reviewing and supporting several Kaplan efforts in online learning in Sydney</p>',
    d5:'<p>Thinkful Front End Web Development class. Built several small projects (see links)</p>',
    d6:'<p>CTO of Noodle, an education search and recommendation web startup launched by the founder of The Princeton Review and 2U.</p>' +
         '<p>Replaced outsourced development with a NY-based team and developed a new IT architecture emphasizing Python, MongoDB, Solr, and a REST API.</p>' +
         '<p>Managing data acquisition, software development, and IT operations using Amazon cloud services.</p>',
    d7:'<p>For AGS (then a Verizon company, now NTT Data), ran a division consulting on strategy, algorithms, and analytics for companies including IBM, Verizon, and Hoffmann-La Roche.</p>',
    d8:'<p>Led AGS teams developing software for NYC area organizations including foreign exchange trading for BoA/Merrill Lynch, price reporting for CME Group, international funds transfer for JP Morgan Chase, computer leasing for IBM, ATM’s for RBS NatWest, and teacher/student management for the NYC Department of Education.</p>',
    d9:'<p>For British Aerospace, developed systems on IBM mainframes to control production of combat (Tornado, Harrier) and civilian (Concorde, Airbus) aircraft. </p>',
    e1:'<p>B.Sc. Information Systems & Management, University of London (LSE)</p>',
    e2:'<p>Open Source Software</p><p>published by Digital Press</p>',
    e3:'<p>Downsizing to Client/Server</p><p>published by Academic Press</p>',
    e5:'<p>VS COBOL II for COBOL Programmers</p><p>published by McGraw-Hill</p>',
    e6:'<p>B.Sc. Mathematics, University of Nottingham</p> ',
    e7:'<p>De Paul University continuing education:</p><p>Managing enterprise software development using practical project examples.</p>',
    e8:'<p>Helping to scale up Global Crimes Technology solutions using Java with Spring and Oracle, and introducing MongoDB.</p>',
    e9:'<p>Developing analytical applications for smart meters, streetlights, and asset/fault reporting using C#, Scala, and Groovy with MongoDB and Postgres.</p>',
    f1:'<p>Developing advertising tools for the automotive industry using Node, React, Python, MySQL, Postgres and Google Ad Manager.</p>'
};
