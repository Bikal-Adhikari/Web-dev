// var name = "Bikal"
// name = name.toUpperCase();
// name = name.toLowerCase();

var name = prompt("What is your name?");
var first = name.slice(0,1);
var upperCase = first.toUpperCase();
var second = name.slice(1,name.length);
var lowerCase = second.toLowerCase();
name = upperCase + lowerCase;
alert("Hello, " + name);