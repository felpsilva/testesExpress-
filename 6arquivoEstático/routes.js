const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatos = require('./src/controllers/contatos');

//Rotas da home

route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
route.get('/contato', contatos.paginaInicial);

module.exports = route;