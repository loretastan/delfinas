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
    const sort = req.query.sort || '';
    let sql;
    if (sort === 'height_asc') {
        sql = `
        SELECT *
        FROM trees
        ORDER BY height ASC
        `;
    } else if (sort === 'height_desc') {
        sql = `
        SELECT *
        FROM trees
        ORDER BY height DESC
        `;
    } else if (sort === 'name_asc') {
        sql = `
        SELECT *
        FROM trees
        ORDER BY name ASC
        `;
    } else if (sort === 'name_desc') {
        sql = `
        SELECT *
        FROM trees
        ORDER BY name DESC
        `;
    } else {
        sql = `
        SELECT *
        FROM trees
        `;
    }

    // const sql = `
    // SELECT id, name, height, type
    // FROM trees
    // -- WHERE type = 'lapuotis' AND height > 10
    // -- ORDER BY type ASC, height DESC
    // -- LIMIT 4, 4
    // `;

    connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.json(rows);
    });
});


//INSERT INTO table_name (column1, column2, column3, ...)
//VALUES (value1, value2, value3, ...);

app.post('/trees', (req, res) => {
    const sql = `
     INSERT INTO trees (name, height, type)
     VALUES (?, ?, ?)
     `;
    const { name, height, type } = req.body;
    connection.query(sql, [name, height, type], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    })
});

// DELETE FROM table_name WHERE condition;
app.delete('/trees/:id', (req, res) => {
    const sql = `
     DELETE FROM trees
     WHERE id = ? 
     `;
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

// UPDATE table_name
// SET column1=value, column2=value, ...
// WHERE some_column=some_value

app.put('/trees/:id', (req, res) => {
    const sql = `
UPDATE trees
SET height = ?
WHERE id = ?
`;
    const { height } = req.body;
    connection.query(sql, [height, req.params.id], (err, result) => {
        if (err) throw err;
        res.json({ 'status': 'ok' });
    });
});

app.get('/trees/stats', (req, res) => {
    const sql = `
    SELECT COUNT(*) AS total, AVG(height) AS average
    FROM trees
    `;
    connection.query(sql, (err, rows) => {
        if (err) throw err;
        res.json(rows[0]);
    });
});

app.listen(port, () => {
    console.log(`Maria klauso ${port} porto.`);
});