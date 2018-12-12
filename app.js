'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.set('view engine', '.hbs')

app.use('/api', api)
<<<<<<< HEAD
app.get('/login',(req,res)=>{ 
 res.render('login')
 })
=======
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/', (req, res) => {
  res.render('product')
})
>>>>>>> 8bbd68fa10e593fea5a0a6dd146d45f1f2167c4a

app.get('/', (req, res) => {
  res.render('product')
})

module.exports = app
