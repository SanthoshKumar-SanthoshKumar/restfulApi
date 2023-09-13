const express = require('express');
const app = express();
const port = 3000; 
const cors = require(cors)

// Middleware to parse JSON data
app.use(express.json());

// cors used to connect backed with Front end 
app.use(cors)

// Route for handling GET request to the root endpoint
app.get('/', (req, res) => {
  res.send('GET request received at the root endpoint');
});

// Route for handling POST request to the "/api" endpoint
app.post('/api', (req, res) => {
  const data = req.body;
  console.log('POST request received with data:', data);
  res.send('POST request received and data logged');
});

// Route for handling PUT request to the "/api" endpoint
app.put('/api', (req, res) => {
  const data = req.body;
  console.log('PUT request received with data:', data);
  res.send('PUT request received and data logged');
});

// Route for handling DELETE request to the "/api" endpoint
app.delete('/api', (req, res) => {
  console.log('DELETE request received');
  res.send('DELETE request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
