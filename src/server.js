const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index');
const methodOverride = require('method-override')

//connect db
db.connect();

// use middleware to parse request body
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//overide method
app.use(methodOverride('_method'));
// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            }
        }
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resource/views'));

//Route init
route(app);

app.listen(3000);
