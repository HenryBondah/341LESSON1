
const routes = require('express').Router();

const myController = require('../controllers');

routes. get('/', myController.awesomeFunction);

routes. get('/second', myController.secondFunction);

routes. get('/third', myController.thirdFunction);



module.exports = routes;