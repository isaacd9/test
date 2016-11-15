var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('assets'));

app.get("/", function(req, res) {
  res.send(200, "Hello World");
});

app.listen(port, function() {
  console.log(`Listening on ${port}.`);
});
