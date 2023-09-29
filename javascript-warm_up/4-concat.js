#!/usr/bin/node

// Check if two arguments were provided
if (process.argv.length !== 4) {
    console.log("Usage: ./4-concat.js <arg1> <arg2>");
} else {
    // Get the two arguments
    const arg1 = process.argv[2];
    const arg2 = process.argv[3];

    // Print the arguments in the specified format
    console.log(`${arg1 ? arg1 : 'undefined'} is ${arg2 ? arg2 : 'undefined'}`);
}
