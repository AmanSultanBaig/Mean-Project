// require db connection module 
require('./config/db.config')
//  require neccessary modules
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const registerRoutes = require('./routes/register')

app.use(bodyParser.json())

// routes integrated with /api prefix 
app.use('/api', registerRoutes)

let port = 8000 || process.env.PORT
app.listen(port, () => console.log("App in Runing State!"))