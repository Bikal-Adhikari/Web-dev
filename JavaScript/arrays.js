var guestList = ["Bikal", "Saroj", "Jack", "Angela", "Lara"];
console.log(guestList[0]);

var guestName = prompt("what is your name?");

if (guestList.includes(guestName)) {
  alert("welcomw!");
} else {
  alert("Sorry, maybe next time.");
}
