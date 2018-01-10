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
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let m1 = nums[0];
    let m2 = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > m1) {
            m2 = m1;
            m1 = nums[i];
            continue;
        }
        
        if ((nums[i] > m2) && (nums[i] < m1)) {
            m2 = nums[i];
        }
    }
    
    return m2;
}
function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}