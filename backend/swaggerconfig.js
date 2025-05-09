const swaggerJsdoc = require('swagger-jsdoc');
 
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Customer & Order Service - Node server',
      version: '1.0.0',
      description: 'A simple Express API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};
 
const specs = swaggerJsdoc(options);
 
module.exports = specs;