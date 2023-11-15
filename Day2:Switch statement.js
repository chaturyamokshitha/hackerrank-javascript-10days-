Objective

In this challenge, we learn about switch statements. Check out the attached tutorial for more details.

Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).

Function Description

Complete the getLetter function in the editor below.

getLetter has the following parameters:

string s: a string
Returns

string: a single letter determined as described above
Input Format

Stub code in the editor reads a single string denoting  from stdin.

Constraints

, where  is the length of .
String  contains lowercase English alphabetic letters (i.e., a through z) only.
Sample Input 0

adfgt
Sample Output 0

A
Explanation 0

The first character of string  is a. Because the given criteria stipulate that we print A any time the first character is in , we return A as our answer.

Language: JavaScript (Node.js)
More
//code
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true){
        case 'aeiou'.includes(s[0]):
        letter='A';
        break;
        case 'bcdfg'.includes(s[0]):
        letter='B';
        break;
        case 'hjklm'.includes(s[0]):
        letter='C';
        break;
        case 'npqrstvwxyz'.includes(s[0]):
        letter='D'
        break;
       
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
