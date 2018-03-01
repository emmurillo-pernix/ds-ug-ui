var compression = require('compression');
var express = require('express');
var app = express();

app.use(compression({ threshold: 0}));
app.use(express.static(__dirname + '/dist' ));
app.all('/*', function(req, res) {
  res.sendFile('index.html', { root: __dirname + '/dist' });
});
app.listen(process.env.PORT || 5000);
