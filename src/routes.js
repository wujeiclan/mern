const express = require('express');

const routes = express.Router();

routes.get('/', User.index);
routes.post('/api/users', User.create);

module.exports = routes;