let scores = [12, 13, 14, 16];
 
// All operations in one line
 
let result = scores
 
// Keep even numbers
.filter(score => score % 2 === 0)
 
// Multiply each by 3
.map(score => score * 3)
 
// Add all values
.reduce((sum, value) => sum + value, 0);
 
console.log(result);// output is 126
