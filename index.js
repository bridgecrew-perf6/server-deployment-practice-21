'use strict';

// Importing modules
const app = require('./server/app.js');

// Reading env variables
const PORT = process.env.PORT || 3000;

// Start listening
app.listen(PORT, () => {
  console.log('Server listening!');
});
