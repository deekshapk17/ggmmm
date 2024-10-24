const express = require('express');
const router = express.Router();

// Serve the HTML form
router.get('/', (req, res) => {
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
router.post('/submit', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`<h1>Hello, ${firstName} ${lastName}!</h1>`);
});

module.exports = router;
