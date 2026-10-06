//Filter Even Numbers, Multiply and Sum

let scores = [12, 13, 14, 16];
 
// Step 1: Keep only even numbers
 
let evenScores = scores.filter(
score => score % 2 === 0
);
 
console.log(evenScores); // output is // [12,14,16]
 
 
 
// Step 2: Multiply each value by 3
 
let multipliedScores = evenScores.map(
score => score * 3
);
 
console.log(multipliedScores); // output is [36,42,48]
 
 
// Step 3: Sum all values
 
let total = multipliedScores.reduce(
(sum, value) => sum + value,
0
);
 
console.log(total);// output is 126