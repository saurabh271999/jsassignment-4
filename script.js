let S = "AABCDAD"; 

let countA = 0, countD = 0;

for (let char of S) {
    if (char === 'A') countA++;
    else if (char === 'D') countD++;
}

let B = [countA, countD]; 

console.log(B); 

