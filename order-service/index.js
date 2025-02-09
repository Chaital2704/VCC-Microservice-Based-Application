const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const mysql = require('mysql2'); // Use mysql2 instead of mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chaitalsql@27',
    database: 'orders_db',
    authPlugins: { mysql_clear_password: () => () => Buffer.from('Chaitalsql@27') }
});

connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});


connection.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.post('/orders', (req, res) => {
    const { userId, product } = req.body;
    const query = 'INSERT INTO orders (userId, product) VALUES (?, ?)';
    
    connection.query(query, [userId, product], (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send({ id: result.insertId, userId, product });
    });
});

app.get('/orders', (req, res) => {
    connection.query('SELECT * FROM orders', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send(results);
    });
});

app.listen(5001, () => console.log('Order Service running on port 5001'));

