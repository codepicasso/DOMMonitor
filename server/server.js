const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

// Enable CORS for all routes and all origins
app.use(cors());

app.use(express.json());

app.post('/notify', (req, res) => {
    console.log('Notification received:', req.body);
    fs.appendFileSync('../notifications.json', JSON.stringify(req.body) + '\n');
    res.status(200).send('Notification logged');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
