const express = require('express');
const bodyParser = require('body-parser');
const nameRoutes = require('./exprout.js'); // Import the router

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Use the nameRoutes for the '/' route
app.use('/', nameRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
