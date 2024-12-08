# Node.js HTTP Server Hang: Missing res.end()

This repository demonstrates a common error in Node.js HTTP servers where the `res.end()` method is missing, leading to a server hang.  The client will wait indefinitely for a response.

## Bug
The `bug.js` file contains a minimal HTTP server that omits the crucial `res.end()` call.  This results in a stalled connection.

## Solution
The `bugSolution.js` file corrects this by adding the `res.end()` method after writing the response to the client. This ensures that the server properly closes the connection after sending data.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.  Observe that the server starts, but clients attempting connections remain unresponsive.
3. Run `node bugSolution.js`. The server will now respond correctly.