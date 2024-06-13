import PouchDB from 'pouchdb';
import fs from 'fs';

const DB_URL = 'http://couchdb:5984/data';
// const DB_URL = 'http://localhost:5984/data';
const USER = 'admin';
const PASSWORD = 'password';

const db = new PouchDB(DB_URL, {
    auto_compaction: true,
    auth: { username: USER, password: PASSWORD }
});

console.log("new db");

// Inicializo la db con algunos datos
const initializeDatabase = async () => {
    try {
        const data = JSON.parse(fs.readFileSync('initialData.json', 'utf8'));
        const result = await db.bulkDocs(data);
        console.log('Database initialized with initial data:', result);
    } catch (error) {
        console.error('Error initializing database with initial data:', error);
    }
};

const checkIfDbIsEmpty = async () => {
    try {
        const dbInfo = await db.info();
        if (dbInfo.doc_count === 0) {
            console.log('La base de datos está vacía');
            await initializeDatabase();
        } else {
            console.log('La base de datos no está vacía');
        }
    } catch (error) {
        console.error('Error al verificar si la base de datos está vacía:', error);
    }
};

await checkIfDbIsEmpty();

export {db};
