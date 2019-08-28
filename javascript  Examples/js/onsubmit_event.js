// Below Function Executes On Form Submit
function ValidationEvent() {
// Storing Field Values In Variables
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
// Regular Expression For Email
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
// Conditions
if (name != '' && email != '' && contact != '') {
if (email.match(emailReg)) {
if (document.getElementById("male").checked || document.getElementById("female").checked) {
if (contact.length == 10) {
document.getElementById('error').innerHTML ="All type of validation has done on OnSubmit event.";
return true;
} else {
document.getElementById('error').innerHTML ="The Contact No. must be at least 10 digit long!";
return false;
}
} else {
document.getElementById('error').innerHTML ="You must select gender.....!";
return false;
}
} else {
document.getElementById('error').innerHTML ="Invalid Email Address...!!!";
return false;
}
} else {
document.getElementById('error').innerHTML ="All fields are required.....!";
return false;
}
}
