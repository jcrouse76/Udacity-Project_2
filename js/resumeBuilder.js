/* ------------------Classroom Examples Start----------------------------

$("#main").append("Jason Crouse");
var awesomeThoughts = "I am Jason Crouse and I am AWESOME!";
Declare Variables
var name = "Jason Crouse";
var role = "Senior Technical Team Lead";
var formattedName;
var formattedRole;
Use jquery replace method to replace HTMLheaderName/HTLMheaderRole with my name and role
formattedName = HTMLheaderName.replace(data, name);                       
formattedRole = HTMLheaderRole.replace(data, role);
Use jquery append/prepend to add to the header section of the HTML Page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
String conversion - convert "audacity" to "Udacity"
var firstString = "audacity";
var convertedString = firstString.slice(1).charAt(0).toUpperCase() + firstString.substr(2);
console.log(firstString);
console.log(convertedString);
Array Example and append to the header
var skills = ["HTML", "CSS", "Javascript",];
$("#header").append(skills);
console.log(skills.length);
Array example of string manipulation
var name = "AlbERt EINstEiN";
var finalName = name;
console.log(name);
console.log(finalName);
var separator = " ";
var myNameArray = finalName.split(separator);
console.log(myNameArray[0]);
console.log(myNameArray[1]);
finalName = myNameArray[0].charAt(0).toUpperCase() + myNameArray[0].slice(1).toLowerCase()  + separator + myNameArray[1].toUpperCase();
console.log(finalName);
Work Object using dot notation
var work = {};
work.position = "Senior Technical Team Lead";
work.employer = "AT&T";
work.years = "2005 - Present";
work.city = "Alpharetta, GA";
Education object using bracket notation
var education = {};
education["school"] = "Northwest Technical College";
education["years"] = "1996-1999";
education["city"] = "Moorhead, MN";
$("#main").append(work["position"]);
$("#main").append(education.school);
Array for bio object
var skills = ["HTML", "CSS", "Javascript",];
JQuery Event Handle. Will show in console the locaton of where user clicks on the screen
$(document).click(function(loc) {
  console.log("Location X: " + loc.pageX + " " + "Location Y: " + loc.pageY);
});
$("#main").append(internationalizeButton);
Function that takes in a string and returns first letter of first name capitalized, rest lower case
and last name in all CAPS
function inName(iName) {
  var nameArray = iName.trim().split(" ");
  var firstName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);
  var lastName = nameArray[1].toUpperCase();
  console.log(firstName);
  console.log(lastName);
  return firstName + lastName;
}
Call inName function
inName("jason crouse");

------------------Classroom Examples Finish---------------------------- */
//Declare some global variables
var data = "%data%";
var $header = $("#header");
var $topContacts = $("#topContacts");
var $footerContacts = $("#footerContacts");

//Bio Object example using Object Literal Notation
var bio = {
    "name": "Jason Crouse",
    "role": "Senior Technical Team Lead",
    "contacts": {
        "mobile": "206-419-7486",
        "email": "jcrouse76@hotmail.com",
        "github": "jcrouse76",
        "twitter": "crousejj",
        //"Facebook": "crousejj",
        "location": "Alpharetta, GA"
    },
    "biopic": "images/IMG_0339.jpg",
    "welcomeMessage": "Welcome to My Bio!",
    "skills": ["HTML", "Bootstrap", "CSS", "Javascript", "jQuery", "SVG"]
};

//Encapsulate display function in the bio object
bio.display = function() {
    //Use jquery replace method to replace headers with formatted data
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    //var formattedFacebook = HTMLfacebook.replace(data, bio.contacts.Facebook);
    var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    //Use jquery append/prepend to add to the header section of the HTML Page
    $header.prepend(formattedRole);
    $header.prepend(formattedName);
    $topContacts.append(formattedMobile);
    $topContacts.append(formattedEmail);
    $topContacts.append(formattedTwitter);
    //$topContacts.append(formattedFacebook);
    $topContacts.append(formattedGitHub);
    $topContacts.append(formattedLocation);
    $header.prepend(formattedPic);
    $header.append(formattedWelcome);
    $footerContacts.append(formattedMobile);
    $footerContacts.append(formattedEmail);
    $footerContacts.append(formattedTwitter);
    $footerContacts.append(formattedGitHub);
    $footerContacts.append(formattedLocation);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkills = HTMLskills.replace(data, bio.skills[0]);
        $("#skillsH3").append(formattedSkills);
        formattedSkills = HTMLskills.replace(data, bio.skills[1]);
        $("#skillsH3").append(formattedSkills);
        formattedSkills = HTMLskills.replace(data, bio.skills[2]);
        $("#skillsH3").append(formattedSkills);
        formattedSkills = HTMLskills.replace(data, bio.skills[3]);
        $("#skillsH3").append(formattedSkills);
        formattedSkills = HTMLskills.replace(data, bio.skills[4]);
        $("#skillsH3").append(formattedSkills);
        formattedSkills = HTMLskills.replace(data, bio.skills[5]);
        $("#skillsH3").append(formattedSkills);
    }

    //Javascript for Radial Reingold–Tilford Tree 

    $header.append(HTMLskillsTree);

    var diameter = 720;

    var tree = d3.layout.tree()
        .size([360, diameter / 2 - 50])
        .separation(function(a, b) {
            return (a.parent == b.parent ? 1 : 2) / a.depth;
        });

    var diagonal = d3.svg.diagonal.radial()
        .projection(function(d) {
            return [d.y, d.x / 180 * Math.PI];
        });

    var svg = d3.select("div#header").append("svg")
        .attr("width", diameter)
        .attr("height", diameter) /* original code was diameter - 150 */
        .append("g")
        .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var root = {
        "name": "Skills",
        "children": [{
            "name": "Programming",
            "children": [{
                "name": "JavaScript",
                "size": 3938
            }, {
                "name": "Bootstrap",
                "size": 3812
            }, {
                "name": "HTML",
                "size": 6714
            }, {
                "name": "CSS",
                "size": 3000
            }, {
                "name": "jQuery",
                "size": 3000
            }, {
                "name": "SVG",
                "size": 3000
            }, ]
        }, {
            "name": "Operating Systems",
            "children": [{
                "name": "Mac",
                "size": 3534
            }, {
                "name": "Windows",
                "size": 5731
            }, {
                "name": "Linux",
                "size": 7840
            }, ]
        }, {
            "name": "Telefony Platforms",
            "children": [{
                "name": "Genesys",
                "size": 3534
            }, {
                "name": "Cisco",
                "size": 5731
            }, {
                "name": "Unix",
                "size": 7840
            }, ]
        }, {
            "name": "QA",
            "children": [{
                "name": "Automated Test Tools",
                "size": 3534
            }, {
                "name": "Enhancement",
                "size": 5731
            }, {
                "name": "Regression",
                "size": 7840
            }, ]
        }, ]
    };

    var nodes = tree.nodes(root),
        links = tree.links(nodes);

    var link = svg.selectAll(".link")
        .data(links)
        .enter().append("path")
        .attr("class", "link")
        .attr("d", diagonal);

    var node = svg.selectAll(".node")
        .data(nodes)
        .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")";
        });

    node.append("circle")
        .attr("r", 4.5);

    node.append("text")
        .attr("dy", ".31em")
        .attr("text-anchor", function(d) {
            return d.x < 180 ? "start" : "end";
        })
        .attr("transform", function(d) {
            return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)";
        })
        .text(function(d) {
            return d.name;
        });

    d3.select(self.frameElement).style("height", diameter - 150 + "px");

};

bio.display();



//Education object using JSON
var education = {
    "schools": [{
        "name": "Northwest Technical College",
        "location": "Moorhead, MN",
        "degree": "Associates of Applied Science",
        "majors": "Computer Programming",
        "dates": 1999,
        "url": "http://www.minnesota.edu/"
    }],
    /* Added some personalization to resume. Removing due to 
    rubric restrictions on the JSON object
    "certifications": [{
        "name": "University Of Washington",
        "location": "Seattle, WA",
        "certification": "C++ Certification",
        "years": "2002",
        "URL": "http://www.pce.uw.edu/certificates/cpp-programming.html"
    }, {
        "name": "Agile Center of Excellence",
        "location": "Redmond, WA",
        "certification": "Agile Bronze Certification",
        "years": "2012",
        "URL": "http://agilemanifesto.org/"
    }],
    */
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udactiy",
        "date": 2016,
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace(data, education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[school].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
            var formattedSchoolURL = HTMLschoolURL.replace(data, education.schools[school].url);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolMajor);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolURL);
        }
    }
    /*
        for (var cert in education.certifications) {
            if (education.certifications.length > 0) {
                $("#education").append(HTMLcertificationStart);

                var formattedCertificationSchoolName = HTMLcertificationSchoolName.replace(data, education.certifications[cert].name);
                var formattedCertificationCertification = HTMLcertificationType.replace(data, education.certifications[cert].certification);
                var formattedCertificationDates = HTMLcertificationDates.replace(data, education.certifications[cert].years);
                var formattedCertificationLocation = HTMLcertificationLocation.replace(data, education.certifications[cert].location);
                var formattedCertificationSchoolURL = HTMLcertificationSchoolURL.replace(data, education.certifications[cert].URL);

                $(".education-entry:last").append(formattedCertificationSchoolName);
                $(".education-entry:last").append(formattedCertificationCertification);
                $(".education-entry:last").append(formattedCertificationDates);
                $(".education-entry:last").append(formattedCertificationLocation);
                $(".education-entry:last").append(formattedCertificationSchoolURL);
            }
        } */

    for (var online in education.onlineCourses) {
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineStart);

            var formattedOnlineSchoolName = HTMLonlineSchoolName.replace(data, education.onlineCourses[online].school);
            var formattedOnlineTitleType = HTMLonlineTitleType.replace(data, education.onlineCourses[online].title);
            var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[online].date);
            var formattedOnlineURL = HTMLonlineSchoolURL.replace(data, education.onlineCourses[online].url);

            $(".education-entry:last").append(formattedOnlineSchoolName);
            $(".education-entry:last").append(formattedOnlineTitleType);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

education.display();

/*jshint multistr: true */
//Work object using JSON
var work = {
    "jobs": [{
        "title": "Senior Technical Team Lead",
        "employer": "AT&T",
        "dates": "2013 - Present",
        "location": "Alpharetta, GA",
        "description": "Interview and select employees, allocate proper staffing levels, \
            supervise direct reports and scrum team, identify areas for improvement, aid in development \
            of training plans, ensure Company policies are being enforced, conduct long-range planning \
            for team, establish team goals, establish relationships with vendors, act as main contact \
            ith other organizations, assist in business strategy, assist in translation of technical requirements \
            to application specific requirements, ensure projects are delivered on time and within budget."
    }, {
        "title": "Technical Team Lead - Mobility Quality Assurance",
        "employer": "AT&T",
        "dates": "2009 - 2013",
        "location": "Bothell, WA",
        "description": "Allocate QA resources to scrum team, provide project estimates based on high level requirements, \
             work with architecture, development, and project management teams on project strategy, work closely with Senior \
             Technical Director on staffing levels, complete A&D reviews for 6 direct reports, assist in QA Testing, analyze \
             business requirements."
    }, {
        "title": "Senior IT Analyst",
        "employer": "AT&T",
        "dates": "2005 - 2009",
        "location": "Bothell, WA",
        "description": "Create and execute functional and regression QA test cases for Mobility IVR projects, open defects in HP \
            Quality Center and ensure defects are fixed in a timely fashion based on severity level, report trouble areas to \
            Senior Technical Directors of QA and Development organizations, review business requirements and identify \
            functional requirement gaps."
    }, {
        "title": "Software Test Engineer",
        "employer": "Volt Services",
        "dates": "2000-2005",
        "location": "Redmond, WA",
        "description": "Create and execute test cases built from application design requirements on Windows XP and \
            Windows Server platforms, open defects and ensure fixes are delivered in expected timeframe based on severity, \
            assist Software Design Test Engineers on requirements and defects. Collaberate and communicate with team members \
            on functionality to eliminate repetitive testing."
    }]
};

work.displayWork = function() {

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }

    //Playing around with jQuery Events
    $('#workExperience').bind("mouseover", function() {
        var color = $(this).css("background-color");
        $(this).css("background-color", "#EEE8AA");

        $(this).bind("mouseout", function() {
            $(this).css("background", color);
        });

    });
};

work.displayWork();

var projects = {
    "projects": [{
        "title": "My Portfolio",
        "dates": "2015",
        "description": "My own portfolio website built using HTML5, Bootstrap, and CSS",
        "images": ["images/P1_Portfolio.png"]
    }]
};

//Encapsulate display function in the projects object
projects.display = function() {

    for (var project in projects.projects) {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    if (projects.projects[project].images.length > 0) {
                        var formattedProjectImages = HTMLprojectImage.replace(data, projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedProjectImages);
                    }
                }
            }
        }
    }
};

projects.display();

//Add map to the page
$("#mapDiv").append(googleMap);