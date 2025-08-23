
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
const PORT = 5000;

const dbConfig = {
    host: 'server-mysql',
    user: 'user',
    password: '12345',
    database: 'db',
    port: 3306
};

// Root endpoint
app.get('/', (req, res) => {
    res.send('Backend2 running');
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
    res.json({ status: 'ok' });
});

// Endpoint to get products (the other half)
app.get('/productos', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        // Get the next 5 products (offset 5)
        const [rows] = await connection.query('SELECT * FROM productos LIMIT 5 OFFSET 5');
        await connection.end();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend2 listening on port ${PORT}`);
});
