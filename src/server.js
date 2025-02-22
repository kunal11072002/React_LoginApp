const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const users = [];  // This will act as a mock database

app.use(bodyParser.json());
app.use(cors());

const secretKey = 'your-secret-key';

// Sign Up Route
app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { username, password: hashedPassword };
    users.push(newUser);
    
    res.status(201).json({ message: 'User created successfully' });
});

// Sign In Route
app.post('/api/signin', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ message: 'Logged in successfully', token });
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});