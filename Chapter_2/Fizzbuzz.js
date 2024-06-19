// using for loop to produce fizzbuzz

for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += "Buzz";
	console.log (output || n );
} 

/*for (let n = 1; n <= 100; n++):

This line starts a for loop that initializes n to 1 and increments it by 1 in each iteration.
The loop will continue to run as long as n is less than or equal to 100.
So, the loop will run 100 times, with n taking values from 1 to 100.
let output = "";:

Inside the loop, a variable output is declared and initialized to an empty string for each iteration of the loop.
if (n % 3 == 0) output += "Fizz";:

This line checks if n is divisible by 3 (i.e., the remainder when n is divided by 3 is zero).
If n is divisible by 3, the string "Fizz" is appended to the output variable.
if (n % 5 == 0) output += "Buzz";:

This line checks if n is divisible by 5.
If n is divisible by 5, the string "Buzz" is appended to the output variable.
console.log(output || n);:

This line prints the value of output to the console.
If output is an empty string (which means n was neither divisible by 3 nor by 5), the logical OR (||) operator ensures that n itself is printed instead.
Example Outputs
For n = 1, output remains "", so it prints 1.
For n = 3, output becomes "Fizz", so it prints Fizz.
For n = 5, output becomes "Buzz", so it prints Buzz.
For n = 15, output becomes "FizzBuzz" because n is divisible by both 3 and 5, so it prints FizzBuzz. */

