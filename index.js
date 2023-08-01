function scuberGreetingForFeet(depth){
  // Write your code here!
if (depth <= 400) {
  return "This one is on me!"
} else {
  if (depth >= 2000) {
    if (depth > 2500) {
      return "No can do."
    } else {
      return "I will gladly take your thirty bucks."
    }
  }
  else {
    return "That will be twenty bucks."
  }
}
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much."
  }
  if (tip === "not as generous") {
    return "Thank you."
  }
  if (tip !== "generous" && tip !== "not as generous") {
    return "Bye."
  }
}