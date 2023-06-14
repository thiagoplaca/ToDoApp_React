const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://127.0.0.1/todo').then(() => {
    console.log('Connected to Database')
}).catch(() => {
    console.log('Not connected to Database Error!', err)
})