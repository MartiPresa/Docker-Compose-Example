import express from 'express';
import cors from 'cors';
import { dataM } from './services/service.js'; 
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());
app.use(bodyParser.json()); // Configuración para parsear JSON
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Ruta para obtener todos los documentos
app.get('/data', async (req, res) => {
    try {
        console.log('llegue');
        const data = await dataM.fetchAllDocuments();
        res.json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

// Ruta para crear un nuevo documento
app.post('/data', async (req, res) => {
    try {
        console.log("INSERTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        const result = await dataM.insertDocument(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
