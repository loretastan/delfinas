// bankas2/server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/saskaitos', (req, res) => {
    const saskaitos = gautiSaskaitasIsFailo();
    res.json(saskaitos);
});

app.post('/saskaitos', (req, res) => {
    const { vardas, pavarde, suma } = req.body;
    const saskaitos = gautiSaskaitasIsFailo();
    const naujaSaskaita = {
        id: generuotiSaskaitosId(),
        vardas,
        pavarde,
        suma,
    };
    saskaitos.push(naujaSaskaita);
    irasytiSaskaitasIFaila(saskaitos);
    res.json({ success: true, message: 'Sąskaita sėkmingai sukurta.' });
});

app.put('/saskaitos/:id', (req, res) => {
    const { id } = req.params;
    const { action, suma } = req.body;
    const saskaitos = gautiSaskaitasIsFailo();
    const saskaitaIndex = saskaitos.findIndex((s) => s.id === Number(id));

    if (saskaitaIndex !== -1) {
        if (action === 'prideti') {
            saskaitos[saskaitaIndex].suma += suma;
        } else if (action === 'nuskaiciuoti') {
            if (saskaitos[saskaitaIndex].suma >= suma) {
                saskaitos[saskaitaIndex].suma -= suma;
            } else {
                return res.status(400).json({ success: false, message: 'Negalima nuskaičiuoti daugiau nei yra sąskaitoje.' });
            }
        }
        irasytiSaskaitasIFaila(saskaitos);
        res.json({ success: true, message: 'Operacija sėkminga.' });
    } else {
        res.status(404).json({ success: false, message: 'Sąskaita nerasta.' });
    }
});

app.delete('/saskaitos/:id', (req, res) => {
    const { id } = req.params;
    const saskaitos = gautiSaskaitasIsFailo();
    const naujasSaskaituSarasas = saskaitos.filter((s) => s.id !== Number(id));
    irasytiSaskaitasIFaila(naujasSaskaituSarasas);
    res.json({ success: true, message: 'Sąskaita ištrinta sėkmingai.' });
});

app.listen(port, () => {
    console.log(`Express serveris veikia portu ${port}`);
});

function gautiSaskaitasIsFailo() {
    try {
        const saskaitos = fs.readFileSync('data/data.json', 'utf-8');
        return JSON.parse(saskaitos);
    } catch (error) {
        fs.writeFileSync('data/data.json', '[]', 'utf-8');
        return [];
    }
}

function irasytiSaskaitasIFaila(saskaitos) {
    fs.writeFileSync('data/data.json', JSON.stringify(saskaitos, null, 2), 'utf-8');
}

function generuotiSaskaitosId() {
    const saskaitos = gautiSaskaitasIsFailo();
    const maxId = Math.max(...saskaitos.map((s) => s.id), 0);
    return maxId + 1;
}
