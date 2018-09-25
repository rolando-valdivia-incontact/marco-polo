var express = require('express');
var app = express();
app.get('/marco', function (req, res) {
  res.status(200).send('Polo!');
});
var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Example app listening on port %s!',port);
});
module.exports = server;