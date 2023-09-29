#!/usr/bin/node

// Check the number of command-line arguments
const numArgs = process.argv.length - 2; // Subtract 2 to exclude 'node' and script name

if (numArgs === 0) {
    console.log('No argument');
} else if (numArgs === 1) {
    console.log('Argument found');
} else {
    console.log('Arguments found');
}
