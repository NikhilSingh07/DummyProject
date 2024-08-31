require('dotenv').config();
const http = require('http');


// Define a port to listen on
const port = 3002;

// Create a server that responds to requests
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Make the server listen on the specified port
server.listen(port, () => {
  console.log("SECRET: ", process.env.SECRET);
  console.log(`Server running at http://localhost:${port}/`);
});
