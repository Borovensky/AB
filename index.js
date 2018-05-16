const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Test Node');
});

app.listen(5050);