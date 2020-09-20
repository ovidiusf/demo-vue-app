const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const portApp = process.env.PORT || 80;
app.listen(portApp);

server.use(middlewares);
server.use(router);

server.listen(port);
