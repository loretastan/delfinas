const express = require('express');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// parse application/json
app.use(bodyParser.json());


// router

app.get('/', (req, res) => {
    console.log('Buvo užklausta /');
    res.send('Labas Bebrai!');
});

app.get('/m/44', (req, res) => {
    console.log('Color:', req.query.color);
    res.send(`<h1 style="color:${req.query.color}; font-size:${req.query.size}px">Labas, Meškėnai!</h1>`);
});

app.get('/bebrenas/:color', (req, res) => {
    console.log('Color:', req.params.color);
    res.send(`<h1 style="color:${req.params.color}; font-size:${req.query.size}px">Labas, Bebrėnai!</h1>`);
});

app.get('/form', (req, res) => {
    const html = fs.readFileSync('./htmls/form.html', 'utf8');
    res.send(html);
});

app.post('/form', (req, res) => {
    let data = fs.readFileSync('./data/data.json', 'utf8');
    data = JSON.parse(data);
    data.push(req.body);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/data.json', data);
    res.redirect('/form');
});

app.get('/form-js', (req, res) => {
    let html = fs.readFileSync('./htmls/jsform.html', 'utf8');

    let data = fs.readFileSync('./data/data.json', 'utf8');
    data = JSON.parse(data);
    let htmlData = '';
    data.forEach(item => {
        htmlData += `<tr><td>${item.name}</td><td>${item.surname}</td><td>${item.age}</td></tr>`;
    });
    html = html.replace('{{data}}', htmlData);

    res.send(html);
});

app.post('/form-js', (req, res) => {
    let data = fs.readFileSync('./data/data.json', 'utf8');
    data = JSON.parse(data);
    data.push(req.body);
    data = JSON.stringify(data);
    fs.writeFileSync('./data/data.json', data);
    res.json({ success: true });

});



//



app.listen(port, () => {
    console.log(`Bebras klauso ${port} porto.`);
});