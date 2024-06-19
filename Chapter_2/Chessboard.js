let size = 8;

let board = "";

for (let y = 0; y < size; y++){
	for (let x = 0; x < size; x++){
		if ((x+y) % 2 == 0){
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);

/*Step-by-Step Explanation
let size = 8;:

This line initializes a variable size with the value 8. This determines the dimensions of the grid (8x8 in this case).
let board = "";:

A variable board is initialized as an empty string. This will be used to build the chessboard pattern.
for (let y = 0; y < size; y++) {:

This outer for loop iterates over each row of the grid. The variable y starts at 0 and increments by 1 until it reaches 7 (since y < size and size is 8).
for (let x = 0; x < size; x++) {:

This inner for loop iterates over each column of the grid for the current row y. The variable x starts at 0 and increments by 1 until it reaches 7.
if ((x + y) % 2 == 0) {:

Inside the inner loop, there is a condition that checks if the sum of the current row (y) and column (x) indices is even. If the sum is even, the condition evaluates to true.
board += " ";:

If the condition (x + y) % 2 == 0 is true, a space character (" ") is added to the board string.
board += "#";:

If the condition is false (i.e., the sum of x and y is odd), a hash character ("#") is added to the board string.
board += "\n";:

After completing the inner loop for the current row, a newline character ("\n") is added to the board string to move to the next row.
console.log(board);:

Finally, the entire board string is printed to the console, displaying the 8x8 chessboard pattern.
Example Output
The output of this code will be:

shell
Copy code
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
Explanation of the Pattern
The pattern alternates between spaces and hash characters.
For any position (x, y):
If the sum x + y is even, a space character is placed.
If the sum x + y is odd, a hash character is placed.
This creates the alternating pattern typical of a chessboard.
*/

