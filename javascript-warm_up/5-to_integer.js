#!/usr/bin/node

// Check if there is at least one command line argument
if (process.argv.length < 3) {
  console.log('Not a number');
} else {
  // Convert the first command line argument to an integer
  const number = parseInt(process.argv[2], 10);

  // Check if the conversion resulted in a valid integer
  if (!isNaN(number)) {
    console.log('My number: ' + number);
  } else {
    console.log('Not a number');
  }
}
