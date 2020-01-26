function scuberGreetingForFeet(length){
  // Write your code here!
  if (length <= 400){
    return 'This one is on me!'
  }
  else if (length > 2000 && length < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (length > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;

  switch (tip) {
    case 'generous': 
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default: 
      response = "Bye.";
      break;
  }
  return response
}