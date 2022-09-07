const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatos = require('./controllers/contatos');


//Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
route.get('/contato', contatos.paginaInicial);

module.exports = route;