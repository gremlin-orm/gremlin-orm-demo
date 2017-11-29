const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const queryController = require('./controllers/queryController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req, res, next) {
  if (req.url.match(/.css$/)) {
    res.header("Content-Type", "text/css");
    res.sendFile(path.join(__dirname + '/..' + req.url));
  }
  else if (req.url.match(/.js$/)) {
    res.header("Content-Type", "application/javascript");
    res.sendFile(path.join(__dirname + '/..' + req.url));
  }
  else {
    if (req.url.match(/query/)) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.type('json');
    }
    next();
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
});

app.post('/query/run', queryController.runQuery);

app.listen(8080);

module.exports = app;
