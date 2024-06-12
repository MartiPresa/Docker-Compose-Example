import PouchDB from 'pouchdb';
import fs from 'fs';

const port = "5984";
// const DB_URL = 'http://couchdb:${port}/data';
const DB_URL = 'http://localhost:${port}/data';
const USER = 'admin';
const PASSWORD = 'password';

const db = new PouchDB(DB_URL, {
    auto_compaction: true,
    auth: { username: USER, password: PASSWORD }
});

console.log("new db");

const initializeDatabase = async () => {
    try {
        // Inicializar la base de datos con datos iniciales si está disponible
        const data = JSON.parse(fs.readFileSync('initialData.json', 'utf8'));
        const result = await db.bulkDocs(data);
        console.log('Database initialized with initial data:', result);
    } catch (error) {
        console.error('Error initializing database with initial data:', error);
    }
};

const checkAndCreateDatabase = async () => {
    try {
        // Verificar si la base de datos existe
        const dbInfo = await db.info();
        console.log('Database exists:', dbInfo);
    } catch (infoError) {
        if (infoError.status === 404) {
            console.log('Database does not exist. Creating...');
            try {
                // Crear un documento dummy para inicializar la base de datos
                await db.put({_id: 'dummy_doc', dummy: true});
                console.log('Database created successfully.');
                await db.remove('dummy_doc'); // Opcional: eliminar el documento dummy
                 // Inicializar la base de datos
                await initializeDatabase();
            } catch (createError) {
                console.error('Error creating database:', createError);
            }
        } else {
            console.error('Error checking database:', infoError);
        }
    }
};

checkAndCreateDatabase();

export {db};
// export { db as PouchDB };
