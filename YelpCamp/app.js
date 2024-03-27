const express = require('express');
const app = express();

const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const Review = require('./models/reviews');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

const campgrounds = require('./routes/campgrounds');
const reviews = require('./routes/reviews')
const ExpressError = require('./utils/expressError');

const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('./models/user');

const sessionConfig = {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7

    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
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
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/campgrounds', campgrounds)
app.use('/campgrounds/:id/reviews', reviews)
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('home');
})

app.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'rammm@gmail.com', username: 'ramm' });
    const newUser = await User.register(user, 'chicken');
    res.send(newUser);
})

app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found!!', 404))
})

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    if (!err.message) err.message = 'oh boy!! Something went wrong';
    res.status(status).render('error', { err })
})

app.listen(2000, () => {
    console.log("Serving on port 2000");
})