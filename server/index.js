// import the express library
const express = require('express');

// assign express to app (community convention).
const app = express();

// main route
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5001);
