const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Hello serveur Node!');
});

app.listen(5000, () => {
    console.log('Listening to localhost 5000');
});
