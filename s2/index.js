const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'forest2'
})
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

connection.connect()


// Select column1, column2, ....
//FROM table_name;
app.get('/trees', (req, res) => {

    const sql = `
SELECT id, name, height, type
FROM trees
-- WHERE type = 'lapuotis' AND height > 10
-- ORDER BY type ASC, height DESC
-- LIMIT 4, 4
`;

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});






app.listen(port, () => {
    console.log(`Maria klauso ${port} porto.`);
});