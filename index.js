const express = require('express');
const path = require("path");
const url = require("url");

const app= express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); // Replaces bodyParser.json()
app.use(express.static('public')); // Serve frontend files

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

// Server Start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));