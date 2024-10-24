const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// Function to read a file and return an array of lines
const readLinesFromFile = () => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        // Split the content into lines
        const lines = data.split('\n');
        console.log('Array of lines:', lines);
    });
};

// Call the function
readLinesFromFile();
