/*Todo : Life in Weeks Coding Exercise
I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.

In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.



It will take your current age as the input and console.logs a message with our time left in this format:

You have x days, y weeks, and z months left.

Where x, y and z are replaced with the actual calculated numbers.



For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.



IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input

e.g. If you are 56 years old:

lifeInWeeks(56)
Example Output

You have 12410 days, 1768 weeks, and 408 months left.
Hint

Try using this Repl.it playground to test your code and see if the output is what you expect it to be.

Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops. */

function lifeInWeeks(age) {
  /************Don't change the code above************/

  

  var maxAge = 90;
  var daysInYear = 365;
  var weeksInYear = 52;
  var monthsInYear = 12;

  // Calculate remaining time
  var yearsLeft = maxAge - age;
  var daysLeft = yearsLeft * daysInYear;
  var weeksLeft = yearsLeft * weeksInYear;
  var monthsLeft = yearsLeft * monthsInYear;

  // Display the result
  console.log(
    `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`
  );

  /*************Don't change the code below**********/
}

// Example usage
lifeInWeeks(prompt("Enter your current age."));