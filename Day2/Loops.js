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
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vo = 'aeiou';
    
    var v = '';
    var c = '';
    
    for(let si of s) {
       if (vo.includes(si)) {
           v += si + '\n';
       }
       else {
           c += si + '\n';
       }
    }
    
    console.log(v.trim());
    console.log(c.trim());
}
function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}