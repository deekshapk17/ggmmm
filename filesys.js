const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');

// Function to create and write to a file
const createAndWriteFile = () => {
    const content = 'Hello, this is a test file!\nWelcome to Node.js file system.';
    
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('File created and written successfully!');

        // Read the file
        readFile();
    });
};

// Function to read a file
const readFile = () => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:\n', data);

        // Delete the file
        deleteFile();
    });
};

// Function to delete a file
const deleteFile = () => {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
            return;
        }
        console.log('File deleted successfully!');
    });
};

// Run the file operations
createAndWriteFile();
