const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Contacts API',
  },
  // host: 'localhost:8080/api-docs',
  // schemes: ['http'],
  host: 'three41lesson1.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc);
