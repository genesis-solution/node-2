const express = require('express');
const app = express();
const PORT = 3002;

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to node 2');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
