//Sum Array Using reduce() method
let marks = [12, 20, 40, 35, 14, 37, 100];
 
// reduce() combines all values into one value
 
let total = marks.reduce(
(sum, mark) => sum + mark,
0
);
 
// Initial sum value is 0
 
console.log(total); //output is 258 
 