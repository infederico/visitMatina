const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// Metadata info about our API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Visit Matina API',
      version: '0.0.1',
    },
  },
  apis: [
    //"src/db.js",
    'src/routes/media/media.js',
    'src/routes/comments/comments.js',
    'src/routes/users/usersRouter.js',
    'src/routes/product/productRouter.js',
  ],
}

//DOCS
const swaggerSpec = swaggerJSDoc(options)

// SETUP DOCS
const swaggerDocs = (app, port) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.sed(swaggerSpec)
  })

  console.log('Documentacion disponible en: http://localhost:3001/api/docs')
}

module.exports = { swaggerDocs }
