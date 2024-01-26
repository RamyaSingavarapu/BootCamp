const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('dev'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/chicken', (req, res, next) => {
    console.log('I LOVE CHICKEN');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password == 'chickennugget') {
        next();
    } else {
        throw new AppError('Password Needed!!', 500);
    }
}

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
app.get('/error', (req, res) => {
    chicken.fly();
})


app.get('/', (req, res) => {
    console.log(req.requestTime);
    res.send("HOME PAGE!!")
})

app.get('/chicken', (req, res) => {
    console.log(req.requestTime);
    res.send('chick chick');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear a headphones in public so I dont have talk to anyone');
})

// app.use((err, req, res, next) => {
//     console.log('********************************');
//     console.log('**********ERROR*********');
//     console.log('********************************');
//     console.log(err);
//     res.status(500).send('OH NO!! ERROR');
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 401 } = err;
    const { message = "HELLO!! ERROR" } = err;
    res.status(status).send(message);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND');
})

app.listen(1111, () => {
    console.log('LISTENING ON PORT 1111');
})