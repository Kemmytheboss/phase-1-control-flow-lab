function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
	if (distanceInFeet > 2500) {
		return `No can do.`;
	}
	else if (distanceInFeet > 2000) {
		return `I will gladly take your thirty bucks.`;
	}
	else if (distanceInFeet <= 400) {
		return `This one is on me!`;
	}
  else if (distanceInFeet > 400 < 2000) {
		return `That will be twenty bucks.`;}

}
function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ?  "Ok, sounds good." : "No go."
  // if(city === 'NYC'){
  //   return "Ok, sounds good."
  // }
  // else {
  //   return "No go."
  // }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip === 'generous'){
    return  "Thank you so much."
  }
  else if (tip === 'not as generous'){
    return "Thank you."
  }
  else {
    return 'Bye.'
  }
  
}