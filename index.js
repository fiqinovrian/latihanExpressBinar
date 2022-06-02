const express = require('express');
const router = require('./routing2');
const app = express();
const port = 3000;

app.set('view engine','ejs');

// app.use(router);

app.get('/',(req, res) => res.render('index'));
app.get('/bingle',(req, res) => res.send('Selamat datang di bingle'));
app.listen(port, () => console.log(`Example app listening at http:// localhost:${port}`));
app.get('/greet', (req, res) => {
    const name = req.query.name || `void` 
    res.render('greet', {
        name
    })
})
app.get('/welcome', (req, res) => {
    const nama = req.query.nama || `void`
    res.render('welcome', {
        nama
    })
})
app.get('/register', (req, res) => res.render('register'));