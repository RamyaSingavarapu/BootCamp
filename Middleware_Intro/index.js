const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLE WARE");
//     next();
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLE WARE");
//     return next();
//     console.log("THIS IS MY SECOND MIDDLE WARE - AFTER CALLING");
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLE WARE");
//     next();
// })


app.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send("HOME PAGE!!")
})

app.get('/chicken', (req, res) => {
    console.log(req.requestTime);
    res.send('chick chick');
})

app.listen(1000, () => {
    console.log('LISTENING ON PORT 1000');
})