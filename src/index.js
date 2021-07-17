const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('project is running.')
});

app.get('/hello', (req, res) => {
  res.send('hello juned.');
});

var server = app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = {
  app,
  server
}
