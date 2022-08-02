const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/user-routes');

const app = express();

app.use('/api', router);

mongoose
    .connect(`mongodb+srv://Pst:VToqLPifOQYg56r0@cluster0.r716vhi.mongodb.net/auth?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Database is connected! Listening to localhost 5000');
    })
    .catch((err) => console.log(err));

