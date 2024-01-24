const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("HOME PAGE!!")
})

app.get('/chicken', (req, res) => {
    res.send('chick chick');
})

app.listen(1000, () => {
    console.log('LISTENING ON PORT 1000');
})