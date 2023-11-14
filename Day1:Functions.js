Objective

Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

Task

Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

Input Format

Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of .

Sample Input 0

4
Sample Output 0

24
Explanation 0

We return the value of .

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
/*
 * Create the function factorial here
 */
function factorial(n){
    let f=1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
