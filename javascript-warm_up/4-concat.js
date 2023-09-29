#!/usr/bin/node

// Check how many arguments were provided
if (process.argv.length === 4) {
    // Two arguments provided
    const arg1 = process.argv[2];
    const arg2 = process.argv[3];
    console.log(`${arg1} is ${arg2}`);
} else if (process.argv.length === 3) {
    // One argument provided
    const arg1 = process.argv[2];
    console.log(`${arg1} is undefined`);
} else {
    // No arguments provided
    console.log(`undefined is undefined`);
}
