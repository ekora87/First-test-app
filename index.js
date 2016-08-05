const http = require ('http');

//dependencies from npm(package.json)
const express = require ('express');
const ejs = require('ejs');
const path = require ('path');

//Initialize our app
const app = express();

//Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Add a route to our app that renders our index view
app.get('/', function (req, res, next){
  res.render('index.ejs', {names: ['Bob', 'Rick', 'Neo']});
});

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname, 'views', 'index.ejs'));

});
const server = http.createServer(app);
const port = 3000;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
