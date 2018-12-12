'use strict'

const mongoose = require('mongoose')
const app = require('./app')
<<<<<<< HEAD
const exphbs = require('express-handlebars')
const config = require ('./config')
=======
const config = require('./config')
>>>>>>> 8bbd68fa10e593fea5a0a6dd146d45f1f2167c4a

mongoose.connect(config.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
