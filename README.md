# Asynchronous Error Handling in Express.js
This repository demonstrates a common issue in Node.js applications that use Express.js for handling HTTP requests: errors thrown within asynchronous functions might not be caught by standard error-handling middleware.

## Problem
The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation.  If an error is thrown within the asynchronous callback (e.g., a database query that fails), the standard error-handling middleware might not catch it because the error occurs *after* the middleware has been executed.

## Solution
The `bugSolution.js` file shows how to resolve this issue by using async/await or promises to properly handle asynchronous errors and ensure they are caught by the error-handling middleware.