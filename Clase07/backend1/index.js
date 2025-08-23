
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';
import axios from 'axios';

const app = express();
app.use(cors());
const PORT = 4000;

const dbConfig = {
    host: 'server-mysql',
    user: 'user',
    password: '12345',
    database: 'db',
    port: 3306
};

// Root endpoint
app.get('/', (req, res) => {
    res.send('Backend1 running');
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
    res.json({ status: 'ok' });
});

// Endpoint to create table and insert products
app.get('/init-products', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(`CREATE TABLE IF NOT EXISTS productos (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nombre VARCHAR(255),
      precio DECIMAL(10,2)
    )`);
        // Insert 10 products
        const products = [
            ['Producto 1', 10.5],
            ['Producto 2', 20.0],
            ['Producto 3', 15.0],
            ['Producto 4', 8.5],
            ['Producto 5', 12.0],
            ['Producto 6', 18.0],
            ['Producto 7', 22.0],
            ['Producto 8', 9.5],
            ['Producto 9', 16.0],
            ['Producto 10', 14.0]
        ];
        await connection.query('DELETE FROM productos');
        await connection.query('ALTER TABLE productos AUTO_INCREMENT = 1');
        for (const [nombre, precio] of products) {
            await connection.execute('INSERT INTO productos (nombre, precio) VALUES (?, ?)', [nombre, precio]);
        }
        await connection.end();
        res.json({ status: 'ok', message: 'Tabla creada y productos insertados' });
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});

// Endpoint to get products (half from backend1, half from backend2)
app.get('/productos', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [rows] = await connection.query('SELECT * FROM productos LIMIT 5');
        await connection.end();
        // Get the rest from backend2
        const { data } = await axios.get('http://backend2:5000/productos');
        res.json([...rows, ...data]);
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend1 listening on port ${PORT}`);
});
