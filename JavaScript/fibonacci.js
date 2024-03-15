// The Fibonacci Exercise
// Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

// Where every number is the sum of the two previous ones.

// e.g. 0, 1, 1, 2, 3, 5 comes from

// 0 + 1 = 1

// 1 + 1 = 2

// 1 + 2 = 3

// 2 + 3 = 5

// etc.

// Create a function where you can call it by writing the code:
// fibonacciGenerator (n)
// Where n is the number of items in the sequence.
// So I should be able to call:
// fibonacciGenerator(3) and get [0,1,1] as the output.

// IMPORTANT: The solution checker is expecting an array as the correct output.
// Do NOT change any of the existing code.
// You do NOT need any alerts or prompts, the result should be returned from the function as an output.
// The first two numbers in the sequence must be 0 and 1.
// Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.
// e.g. for (var i = 0; i < 10; i ++)

// HINT: Use this Repl.it Playground to test out your solution.
// HINT: Use this flow chart to understand the logic if you get stuck.

function fibonacciGenerator(n) {
  var arg = [];
  if (n === 1) {
    arg = [0];
  } else if (n === 2) {
    arg = [0, 1];
  } else {
    arg = [0, 1];
    for (let i = 2; i < n; i++) {
      arg.push(arg[arg.length - 2] + arg[arg.length - 1]);
    }
  }
  return arg;
}

var result = fibonacciGenerator(15);
console.log(result);