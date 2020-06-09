const mongoose = require('mongoose');
// making db connection
mongoose.connect('mongodb://localhost:27017/mean_project', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    !err ? console.log('DB Connection Established!') : console.log("DB Connection Error")
})

module.exports = mongoose