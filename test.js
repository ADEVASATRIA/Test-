let rows = 5; // Set the number of rows in the triangle
let output = "";

for(let i=1; i<=rows; i++) { // Loop through each row
  for(let j=1; j<=i; j++) { // Loop through each asterisk in the row
    output += "* "; // Add an asterisk to the output
  }
  output += "\n"; // Add a new line after each row
}

console.log(output); // Print the output to the console
