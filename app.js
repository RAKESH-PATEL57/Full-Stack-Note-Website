require('dotenv').config();

const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();

const port = 5000 || process.env.PORT;


//helps to pass data through forms and pages.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Static files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('/', function(req, res){
//     const locals = {
//         title: 'Notes',
//         description: 'Free Notes App'
//     }
//     res.render('index', locals);
// });

//Routes
app.use('/', require('./server/routes/index'));


// Handle 404 error
app.get('*', function(req, res){
    // res.status(404).send("404 Page Not Found.");
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
