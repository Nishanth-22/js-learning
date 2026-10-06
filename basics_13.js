// Number Sorting
 
let scores = [12, 3, 19, 16, 14];
 
// Ascending Order
 
console.log(
scores.sort((a, b) => a - b) // output is [3,12,14,16,19]
);
 

 // Descending Order
 
console.log(
scores.sort((a, b) => b - a) // output is [19,16,14,12,3]
); 