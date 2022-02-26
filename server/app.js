const express = require('express')
const app = express();

require('dotenv').config()
const morgan = require('morgan')
const borderParser = require('body-parser')
const cors = require('cors')

app.use(borderParser.urlencoded({extended:false}))
app.use(borderParser.json())
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//Import Middleware Routes
const authRoute = require('./routes/auth/authRoute')
const sellProductRoute = require('./routes/sell-product/sellProductRoute')

app.use('/auth', authRoute)
app.use('/products', sellProductRoute)

module.exports = app