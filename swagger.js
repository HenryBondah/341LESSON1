const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description of my API',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
