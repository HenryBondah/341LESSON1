const routes = require('express').Router();
const myController = require('../controllers');

// Existing general routes
routes.get('/', myController.awesomeFunction);
routes.get('/second', myController.secondFunction);
routes.get('/third', myController.thirdFunction);

// Routes for contacts
routes.get('/contacts', myController.getAllContacts); 
routes.get('/contacts/:id', myController.getContactById); 

module.exports = routes;
