const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('microservice hello.')
});

app.get('/data', (req, res) => {
  res.send('get data is succeed.');
});

var server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = {
  app,
  server
}