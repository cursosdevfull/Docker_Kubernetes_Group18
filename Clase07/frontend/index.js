
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const app = express();
app.use(cors());
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get backend1 address
app.get('/api/backend1-address', (req, res) => {
    // In Docker Compose, use the service name as hostname
    res.json({ backend1: 'http://backend1:4000' });
});

// Endpoint to get products from backend1
app.get('/api/productos', async (req, res) => {
    try {
        // Get backend1 address
        const { data } = await axios.get('http://localhost:3000/api/backend1-address');
        const backend1Url = data.backend1;
        // Fetch products from backend1
        const productosRes = await axios.get(`${backend1Url}/productos`);
        res.json(productosRes.data);
    } catch (err) {
        res.status(500).json({ status: 'error', error: err.message });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Frontend running');
});

// Healthcheck endpoint
app.get('/healthcheck', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Frontend listening on port ${PORT}`);
});
