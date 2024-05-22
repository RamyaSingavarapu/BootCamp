//NodeJs is a program to run javascript natively(not in the browser) 
const express = require('express');// server framework
const mongoSanitize = require('express-mongo-sanitize');
const app = express();

const session = require('express-session');// to maintain a consistent session
const flash = require('connect-flash'); //library to display flash messages
const path = require('path');
const mongoose = require('mongoose'); //library to connect witb mongoDB

const Review = require('./models/reviews');
const User = require('./models/user');

const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');//template engine

const campgroundRoutes = require('./routes/campgrounds');
const reviewRoutes = require('./routes/reviews')
const userRoutes = require('./routes/users');

const ExpressError = require('./utils/expressError');

const passport = require('passport');
const localStrategy = require('passport-local');// auntentication framework to create, store, validate password credentials

app.use(session({
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

app.use(mongoSanitize());

passport.serializeUser(User.serializeUser()); // store modify user back to the db
passport.deserializeUser(User.deserializeUser());// get user details from Id in the cookie

app.use((req, res, next) => {
    console.log(req.query);
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));/*Browser encodes the data sent by the user, and it posts the data to the server. This middleware decodes the encoded data which was sent by the browser. Eg: User: value=4655&name=BOB&ROB; browser:value=4655&name=BOB%26ROB;  middleware: value=4655,
name=BOB&ROB;*/

app.use('/', userRoutes)
app.use('/campgrounds', campgroundRoutes)
app.use('/campgrounds/:id/reviews', reviewRoutes)

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
})


app.all('*', (req, res, next) => {
    const error = new ExpressError('Page not found!!', 404);
    next(error)
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'oh boy!! Something went wrong';
    res.status(status).render('error', { err })
})

app.listen(2000, () => {
    console.log("Serving on port 2000");
})