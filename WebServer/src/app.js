const path = require('path')
const express = require('express');
const hbs = require('hbs')

//we = web server
const app = express();

// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))

hbs.registerPartials(path.join(__dirname, '../templates/partials'));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Test Title',
        name: 'Test name'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Title',
        name: 'Test name'
    });
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Title',
        name: 'Test name'
    });
});



app.listen(3000, () => {
    console.log('Express Server Started!');
})