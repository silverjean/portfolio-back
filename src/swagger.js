const swaggerAutogen = require('swagger-autogen')();
const swaggerConfig = require('./config/swagger');

const outputFile = './src/swagger-documentation.json';
const endpoints = [
  './src/app/routers/auth.js',
  './src/app/routers/comment.js',
  './src/app/routers/contact.js',
  './src/app/routers/user.js',
];

swaggerAutogen(outputFile, endpoints, swaggerConfig);
