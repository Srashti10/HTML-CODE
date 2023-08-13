const mongoose = require('mongoose');

const url = "mongodb+srv://srivastavasrashti45:Srashti@cluster0.dhrxpmi.mongodb.net/?retryWrites=true&w=majority"

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err)
});