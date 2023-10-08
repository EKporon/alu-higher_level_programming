#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

fs.writeFile(filePath, contentToWrite, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1); // Exit the script with a non-zero status code on error
  }
});

