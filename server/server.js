const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const apiRoutes = require('./routes');
const server = express();
const jwt = require('jsonwebtoken');

server.use(bodyParser.json());

server.use('/', apiRoutes);

server.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretKey', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post created',
                authData
            })

        }
    });
   res.json({message: 'hello'});
});

server.post('/api/login', (req, res) => {
    const user = {
        id: 1,
        username: 'test',
        email: 'test@test.com'
    };
    jwt.sign({user}, 'secretKey', (err, token) =>{
       res.json({token})
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer =  bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}
server.listen(port, () => {
    console.log('Server is runing and listening on port 3000');
});

