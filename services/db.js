const mongoose = require('mongoose');
//comment out on local
mongoose.connect("mongodb://localhost:27017/recipes", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false });

//lets check if the connection was not successful
mongoose.connection.on('error', function() {
    console.error.bind(console, 'connection error')
})

//if the connection was successful
mongoose.connection.once('open', function() {
    console.log('Database connection was successful')
})

