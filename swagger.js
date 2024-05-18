const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contact API',
  },
  host: ['localhost:8080', 'https://three41lesson1.onrender.com'],
  schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
