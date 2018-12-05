const express = require('express');
const bubbles = require('../Controllers/bubbleController');

const bubblesRoutes = express.Router();

bubblesRoutes.route('/getbubbles')
    .get(bubbles.getBubbles);