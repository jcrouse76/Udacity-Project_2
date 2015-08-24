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