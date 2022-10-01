const { Router } = require('express');
const express = require('express');

const UserController = require('./controllers/UserController');
const TreinoController = require('./controllers/TreinoController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users/:user_id', UserController.delete); //NÃO FUNCIONOU

routes.get('/users/:user_id/treinos', TreinoController.index); //ENCADEAMENTO DE ROTAS
routes.post('/users/:user_id/treinos', TreinoController.store);

module.exports = routes;