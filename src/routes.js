const express = require('express');

const routes = express.Router();

const User = require('./controllers/users.controller');

routes.get('/', User.index);

// Rotas de usuários
routes.post('/api/users', User.create); // Método post chama o create
routes.get('/api/users', User.index); // Médoto get chama o index
routes.get('api/users.details', User.details);

module.exports = routes;