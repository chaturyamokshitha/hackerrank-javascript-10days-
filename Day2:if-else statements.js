Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If , then .
If , then .
If , then .
If , then .
If , then .
If , then .
Input Format

Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

Constraints

Output Format

The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

Sample Input 0

11
Sample Output 0

D
Explanation 0

Because , it satisfies the condition  (which corresponds to D). Thus, we return D as our answer.

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

function getGrade(score) {
    let grade;
    // Write your code here
    if(score<=30&&score>25)
    grade='A';
    else if(score<=25&&score>20)
    grade='B';
    else if(score<=20&&score>15)
    grade='C';
    else if(score<=15&&score>10)
    grade='D';
    else if(score<=10&&score>5)
    grade='E';
    else
    grade='F';
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}

