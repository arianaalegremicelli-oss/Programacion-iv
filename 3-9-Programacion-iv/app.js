import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { conectarDB } from './config/db.js';
import 'dotenv/config';
import productoRoutes from './src/routes/producto.routes.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/productos', productoRoutes);

conectarDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Express listo en http://localhost:${PORT}`);
    });
});