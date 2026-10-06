// Function that returns a Promise with async


function wait() {
//Create and return a new Promise

return new Promise((resolve) => {
 
// Start a timer for 2000 milliseconds (2 seconds)
setTimeout(() => {
 
// After 2 seconds, complete the Promise
// and send back the value "Task Completed"
resolve("Task Completed");
 
}, 2000);
 
});
 
}
 
// async allows us to use await inside this function
async function start() {
 
// Print immediately
console.log("Starting...");
 
// Call wait()
// wait() returns a Promise
// await pauses this function until the Promise is resolved
const result = await wait();
 
// After 2 seconds:
// result = "Task Completed"
console.log(result);
 
}
 
// Start execution
start();