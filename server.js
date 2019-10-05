const express = require('express');

const projectTracker = require('./routes');

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use('/api/projects', projectTracker);

module.exports = server;