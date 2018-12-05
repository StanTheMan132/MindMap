const dotenv = require('dotenv').config();
const http = require('http');
const app = require('./backend/app.js');

const server = http.createServer(app);