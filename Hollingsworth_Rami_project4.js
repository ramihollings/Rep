/*Reveiling Module Pattern
There should be 12 functions that do something with them inside of a function 13.
Return actual function as call

get to know regex */

// Check Phone number string

function checkNumber(number) {numberRegex = /^\d\d\d-\d\d\d-\d\d\d\d$/;
 if(!number.match(numberRegex)) {console.log("Bad");
  return false;
 }else{ console.log ("Good")};
 return true;
};
checkNumber("123-456-7890")

//Check eMail string

function checkEmail(email) {emailRegex = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
	if(!email.match(emailRegex)) {console.log("B");
	return false;
	}else{console.log ("G")};
	return true;
	};
checkEmail("ramihollingsworth@gmai.com");