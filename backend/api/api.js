/*
  This is the router for the /api route
  All rotues should go through here.
*/

const express = require('express');
const bubbleRoutes = require('./Routers/bubbleRouter');

const router = express.Router();

router.use('/bubble', bubbleRoutes);

module.exports = router;