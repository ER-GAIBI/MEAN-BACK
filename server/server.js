const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const apiRoutes = require('./routes');
const server = express();
server.use(express.json());

server.use('/', apiRoutes);

server.listen(port, () => {
    console.log('Server is runing and listening on port 3000');
});

