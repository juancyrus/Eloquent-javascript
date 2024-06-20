/*Function countBs
This function will count the number of uppercase 'B' characters in a string.

Function countChar
This function will count the number of occurrences of a specified character in a string.

Implementation
countChar Function: This function takes a string and a character as arguments and returns the count of the specified character in the string.
countBs Function: This function will use countChar to count the number of uppercase 'B' characters in the string.
Here is the implementation:
*/

// Function to count the number of occurrences of a specified character in a string
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

// Function to count the number of uppercase 'B' characters in a string
function countBs(string) {
    return countChar(string, 'B');
}

// Example usage
console.log(countBs("BBC")); // Output: 2
console.log(countChar("kakkerlak", "k")); // Output: 4

/* Explanation
countChar Function:

The function initializes a count variable to zero.
It iterates through each character of the string.
If the current character matches the specified character (char), it increments the count.
Finally, it returns the count.
countBs Function:

This function calls countChar with the string and the character 'B'.
It simply returns the result of countChar.
By using countChar, the countBs function becomes more flexible and modular, allowing you to count any character in a string. 
*/
