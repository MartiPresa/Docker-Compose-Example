import express from 'express';
import cors from 'cors';
import { dataM } from './services/service.js'; 
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

app.post('/data', async (req, res) => {
    try {
        console.log("INSERTA "+JSON.stringify(req.body));
        const result = await dataM.insertDocument(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
