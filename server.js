const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const portApp = process.env.PORT || 5000;
console.log('server started for vue ' + portApp);
app.listen(portApp);
