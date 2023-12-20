let sum = 0; //initial sum is zero
let promt = prompt("Enter the number to get Sum of all Number"); // Enter a n number to get the sum of all
for (let i = 0; i <= promt; i++) {
  sum = sum + i; // for adding sum to the sum variable
}

console.log("The sum of 1 to ", promt, "number is ", sum);
