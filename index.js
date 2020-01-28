function scuberGreetingForFeet(feetValue){
  let message;
  if (feetValue <= 400) {
    message = "This one is on me!";
  } else if (feetValue < 2500 && feetValue > 2000) {
    message = "I will gladly take your thirty bucks.";
  } else if (feetValue > 2500) {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city){
 const checkCity = city === "NYC" ? "Ok, sounds good." : "No go.";
 return checkCity;
}

function switchOnCharmFromTip(tip){
  let message; 
  switch (tip) {
    case "generous":
      message = "Thank you so much.";
      break;
    case "not as generous":
      message = "Thank you.";
      break;
    default:
      message = "Bye.";
      break;
  }
return message; 
}