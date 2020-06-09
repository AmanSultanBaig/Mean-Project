const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

let port = 8000 || process.env.PORT
app.listen(port, () => console.log("App in Runing State!"))