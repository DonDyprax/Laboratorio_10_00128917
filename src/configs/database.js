const mongoose = require('mongoose');
const {mongodb} = require('./keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(db => console.log('Connection success.'))
.catch(err => console.log(err));