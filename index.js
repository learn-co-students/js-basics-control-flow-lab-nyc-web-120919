function scuberGreetingForFeet(x){
  // Write your code here!
  if(x <= 400) 
    return 'This one is on me!';
  if (x > 2000 && x <= 2500)
    return 'I will gladly take your thirty bucks.'
  if(x > 2500)
    return 'No can do.'
}

function ternaryCheckCity(x){
  // Write your code here!
  return x == 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(x){
  // Write your code here!
  switch(x) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}