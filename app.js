require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');

require('./module');

//Body middleware to enable json in request body
app.use(express.json());

// My routes
app.use('/api', router);

// Error for routes which are not there
app.use('*', (req, res, next) => {
  next({ message: "Route not found", status: 404 });
})

//Common error handler
app.use((error, request, response, next) => {
  // Error handling middleware functionality
  console.log(`error ${error.message}`) // log the error
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response.status(status).send(error.message)
})

app.listen(4000, () => console.log("Server is running on 4000"))