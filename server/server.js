const express = require('express');
const app = express();
const port = 3020;

 
app.get('/', function (req, res) {
  res.send('Hello World 4');
});
 
app.listen(port, (err) => {
  if (err) {
    throw (err);
  }
  console.log('Server started at http://localhost:' + port);
});