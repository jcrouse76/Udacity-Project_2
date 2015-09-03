//$("#main").append("Jason Crouse");
//var awesomeThoughts = "I am Jason Crouse and I am AWESOME!";

//Declare Variables
//var name = "Jason Crouse";
//var role = "Senior Technical Team Lead";
//var formattedName;
//var formattedRole;

//Use jquery replace method to replace HTMLheaderName/HTLMheaderRole with my name and role
//formattedName = HTMLheaderName.replace("%data%", name);						
//formattedRole = HTMLheaderRole.replace("%data%", role);

//Use jquery append/prepend to add to the header section of the HTML Page
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//String conversion - convert "audacity" to "Udacity"
//var firstString = "audacity";
//var convertedString = firstString.slice(1).charAt(0).toUpperCase() + firstString.substr(2);

//console.log(firstString);
//console.log(convertedString);


//Array Example and append to the header
//var skills = ["HTML", "CSS", "Javascript",];

//$("#header").append(skills);
//console.log(skills.length);

//Array example of string manipulation

//var name = "AlbERt EINstEiN";
//var finalName = name;

//console.log(name);
//console.log(finalName);

//var separator = " ";
//var myNameArray = finalName.split(separator);

//console.log(myNameArray[0]);
//console.log(myNameArray[1]);

//finalName = myNameArray[0].charAt(0).toUpperCase() + myNameArray[0].slice(1).toLowerCase()  + separator + myNameArray[1].toUpperCase();

//console.log(finalName);

//Work Object using dot notation
//var work = {};

//work.position = "Senior Technical Team Lead";
//work.employer = "AT&T";
//work.years = "2005 - Present";
//work.city = "Alpharetta, GA";

//Education object using bracket notation
//var education = {};

//education["school"] = "Northwest Technical College";
//education["years"] = "1996-1999";
//education["city"] = "Moorhead, MN";

//$("#main").append(work["position"]);
//$("#main").append(education.school);


//Array for bio object
//var skills = ["HTML", "CSS", "Javascript",];

//JQuery Event Handle. Will show in console the locaton of where user clicks on the screen
$(document).click(function(loc) {
	console.log("Location X: " + loc.pageX + " " + "Location Y: " + loc.pageY);
});

//Bio Object example using Object Literal Notation
var bio = {
	"name"	: "Jason Crouse",
	"role"	: "Senior Technical Team Lead",
	"contacts" : {
		"cellPhone"	: "206-419-7486",
		"Email"	: "jcrouse76@hotmail.com",
		"Twitter" 	: "crousejj",
		"Facebook"	: "crousejj",
		"GitHub"	: "jcrouse76",
		"Location"	: "Alpharetta, GA"
	},
	"PictureURL"	: "images/IMG_0339.jpg",
	"WelcomeMsg"	: "Welcome to My Bio!",
	"Skills"		: ["HTML", "Bootstrap", "CSS", "Javascript"]
};

//Use jquery replace method to replace HTMLheaderName/HTLMheaderRole with my name and role
var formattedName = HTMLheaderName.replace("%data%", bio.name);						
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cellPhone);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.Email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.Twitter);
var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.Facebook);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.Location);
var formattedPic = HTMLbioPic.replace("%data%", bio.PictureURL);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMsg);
//var formattedSkills = HTMLskills.replace("%data%", bio.Skills);

//Check if Skills array is empty


//Use jquery append/prepend to add to the header section of the HTML Page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedFacebook);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcome);


if(bio.Skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.Skills[0]);
	$("#skillsH3").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[1]);
	$("#skillsH3").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[2]);
	$("#skillsH3").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.Skills[3]);
	$("#skillsH3").append(formattedSkills);
};



//Education object using JSON
var education = {
	"schools" : {
		"name"	: "Northwest Technical College",
		"city"	: "Moorhead, MN", 
		"major"	: "Computer Programming", 
		"years"	: "1999", 
		"URL"	: "http://www.minnesota.edu/"
	},
	"certifications" : [
	{
		"name"	: "University Of Washington",
		"city"	: "Seattle, WA", 
		"major"	: "C++ Certification",
		"year"	: "2002",
		"URL"	: "http://www.pce.uw.edu/certificates/cpp-programming.html"
	},
	{
		"name"	: "Agile Center of Excellence",
		"city"	: "Redmond, WA",
		"major"	: "Agile Bronze Certification",
		"year"	: "2012",
		"URL"	: "http://agilemanifesto.org/"
	}
	],
	"onlinePrograms"	: {
		"title"	: "Front-End Web Developer Nanodegree",
		"school"	: "Udactiy",
		"year"	: "Currently Enrolled",
		"URL"	: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
}

//Work object using JSON
var work = {
	"jobs"	: [
		{
			"position"	: "Senior Technical Team Lead",
			"employer"	: "AT&T",
			"years"	: "2013 - Present",
			"city"	: "Alpharetta, GA",
			"description"	: "To be added at a later time"
		},
		{
			"position"	: "Technical Team Lead",
			"employer"	: "AT&T",
			"years"	: "2009 - 2013",
			"city"	: "Bothell, WA",
			"description"	: "To be added at a later time"
		},
		{
			"position"	: "Senior IT Analyst",
			"employer"	: "AT&T",
			"years"	: 	"2005 - 2009",
			"city"	: "Bothell, WA",
			"description"	: "To be added at a later time"
		},
		{
			"position"	: "Software Test Engineer",
			"employer"	: "Volt Services",
			"years"	: 	"2000-2005",
			"city"	: "Redmond, WA",
			"description"	: "To be added at a later time"
		}
	]
}

function displayWork() {

	for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);	
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

displayWork();
var projects = {
	"projects"	: [
		{
			"title"	: "My Portfolio",
			"dates"	: 2016,
			"description"	: "My own portfolio website built using HTML5, Bootstrap, and CSS",
			"images"	: ["www.espn.com", "www.google.com"]
		}
	]
}

$("#main").append(internationalizeButton);

function inName(iName) {
	var nameArray = iName.trim().split(" ");
	var firstName = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1);
	var lastName = nameArray[1].toUpperCase();

	console.log(firstName);
	console.log(lastName);

	return firstName + lastName;
}

inName("jason crouse");


