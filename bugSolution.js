const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request
  // ...

  res.write('Hello, World!');
  res.end(); // Added res.end() to close the response
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});