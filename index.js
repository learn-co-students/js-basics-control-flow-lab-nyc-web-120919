//RELIC
// function scuberGreetingForFeet(value){
//   // Write your code here!
//   switch (value) {
//     case value <= 400:
//       return "This one is on me!";
//       break;
//     case value >= 2000:
//     let v = 'no can do'
//     let g = "I will gladly take your thirty bucks"
//      value >= 2500 ? (v) : (g);
//       break;
//   }
// } 
// function scuberGreetingForFeet(feet) {
//   if (feet <= 400) {
//     return 'This one is on me!';
//   } else if (1999 < feet && feet < 2500) {
//     return "I will gladly take your thirty bucks.";
//   } else {
//     return "No can do.";
//   }
// }
function scuberGreetingForFeet(value) {
  console.log(value)
    let minimum = value < 400
  switch (minimum) {
    case true:
    console.log(minimum)
      return 'This one is on me!';
      break;
    case false:
      let v = 'No can do.'
      let g = 'I will gladly take your thirty bucks.'
      return value >= 2500 ? v : g;
  }

}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip) {
    switch (tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default:
        return 'Bye.';
    }
  }


