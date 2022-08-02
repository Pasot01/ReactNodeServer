const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
    .connect(`mongodb+srv://Pst:VToqLPifOQYg56r0@cluster0.r716vhi.mongodb.net/auth?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(5000);
        console.log('Database is connected! Listening to localhost 5000');
    })
    .catch((err) => console.log(err));

