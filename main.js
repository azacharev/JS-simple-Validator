// command line: node main.js

//Phone number check
var phoneNumberCheck = function(number){ // 314-123-4567
  if(number.charAt(3) == '-' && number.charAt(7) == '-'){
    return true;
  } else {
    return false;
  }
}
//testing the phoneNumberCheck function
console.log("phoneNumberCheck " + phoneNumberCheck("314-737-3377"));

// birth date check
var birthDateCheck = function(birthDate){ // 10/24/98
  if(birthDate.length == 8 && birthDate.charAt(2) == '/' && birthDate.charAt(5) == '/'){
    var stringFormat = birthDate.slice(3, 6);
    return true;
  } else {
    return false;
  }
}

//testing the birth date check method
console.log("birthDateCheck " + birthDateCheck("10/24/98"));

//postal code

var postalCodeCheck = function(postalCode){
  if(postalCode.length == 5) {
      return true;
    } if(postalCode.length == 10 && postalCode.charAt(4) == '-'){
      return true;
    }else {
      return false;
    }
  }

//testing postal code
console.log("postalCodeCheck " + postalCodeCheck("63131"));
console.log("postalCodeCheck " + postalCodeCheck("1234-67890"));

// state abbreviation

var stateAbbr = function(state){
  var checkCap1 = state.charAt(0);
  var checkCap2 = state.charAt(1);
  if(state.length == 2 && checkCap1 == checkCap1.toUpperCase() && checkCap2 == checkCap2.toUpperCase()){
      return true;
    } else {
      return false;
    }
}


//testing state abbreviation

console.log("state abbreviation check " + stateAbbr("MO"))

//married yes/no
var married = function(response) {
  var text;
  switch(response){
    case "Yes":
    text = "game over";
    return text;
    break;

    case "yes":
    text = "game over";
    return text;
    break;

    case "YES":
    text = "game over";
    return text;
    break;

    case "No":
    text = "game over";
    return text;
    break;

    case "no":
    text = "game over";
    return text;
    break;

    case "NO":
    text = "game over";
    return text;
    break;

    default:
    text = "not valid response";
    return text;
  }
}
//testing married 
console.log("married response check " + married("Yeah"));
