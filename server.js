require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const bookRouter = require('./routes/book.router')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/book', bookRouter)

app.listen(process.env.PORT, () => console.log(`Server is working on port: ${process.env.PORT}`))