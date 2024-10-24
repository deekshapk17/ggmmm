const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.send(`
        <h1>Enter Your Name</h1>
        <form action="/submit" method="POST">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required><br><br>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission
app.post('/submit', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`<h1>Hello, ${firstName} ${lastName}!</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
