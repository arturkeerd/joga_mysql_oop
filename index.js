const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret_key',
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
    resave: false
}));

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass();

const articleRoutes = require('./routes/articles');
app.use('/', articleRoutes);

const authorRoutes = require('./routes/author');
app.use('/', authorRoutes);

const userRoutes = require('./routes/user');
app.use('/', userRoutes);

app.listen(3025, () => {
    console.log(`Server running on http://localhost:3025`);
});