//$("#main").append("Jason Crouse");
//var awesomeThoughts = "I am Jason Crouse and I am AWESOME!";

//Declare Variables
var name = "Jason Crouse";
var role = "Senior Technical Team Lead";
var formattedName;
var formattedRole;

//Use jquery replace method to replace HTMLheaderName/HTLMheaderRole with my name and role
formattedName = HTMLheaderName.replace("%data%", name);						
formattedRole = HTMLheaderRole.replace("%data%", role);

//Use jquery append/prepend to add to the header section of the HTML Page
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//String conversion - convert "audacity" to "Udacity"
var firstString = "audacity";
var convertedString = firstString.slice(1).charAt(0).toUpperCase() + firstString.substr(2);

console.log(firstString);
console.log(convertedString);


//Array Example and append to the header
var skills = ["HTML", "CSS", "Javascript",];

$("#header").append(skills);
console.log(skills.length);

//Array example of string manipulation

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



//Object Example

var bio = {
	"name"	: "Jason Crouse",
	"role"	: "Senior Technical Team Lead",
	"contacts" : {
		"Phone"	: "206-419-7486",
		"Email"	: "jcrouse76@hotmail.com",
		"Twitter" 	: "crousejj"
	},
	"PictureURL"	: "images/fry.jpg",
	"WelcomeMsg"	: "Welcome to My Bio!",
	"Skills"		: skills
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts.Phone);
$("#main").append(bio.contacts.Email);
$("#main").append(bio.contacts.Twitter);
$("#main").append(bio.PictureURL);
$("#main").append(bio.WelcomeMsg);
$("#main").append(bio.Skills);


