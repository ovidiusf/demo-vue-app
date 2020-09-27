const { json } = require('express');
/**
 * Runs the local server
 */
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3000;

// server.use(function(req, res, next) {
//   setTimeout(next, 1500);
// });

server.use(middlewares);
server.use(router);

server.listen(port, function() {
  console.log('JSON Server is running on 3000');
});
