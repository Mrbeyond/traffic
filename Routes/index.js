const Routers = require('express').Router();

const authRouters = require('./auth');

Routers.use(authRouters);


module.exports = Routers;