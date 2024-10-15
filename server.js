// Step 1: Install express
// Run this command in your terminal
// npm install express

// Step 2: Create a basic server using express
const express = require('express');
const path = require('path');
const app = express();

// Step 3: Serve static files from a directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the addition.html file
app.get('/addition.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addition.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});