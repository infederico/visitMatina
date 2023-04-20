const server = require('./src/app.js')
const { conn } = require('./src/db.js')
const { swaggerDocs } = require('./src/routes/swagger.js')

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  //await saveApi();
  console.log('Db connected...')
  server.listen(3001, () => {
    console.log('Server listening at 3001') // eslint-disable-line no-console
    swaggerDocs(server, 3001)
  })
})
