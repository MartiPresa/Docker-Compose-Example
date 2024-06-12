// const { db } = require('../database/db.js');
import dockerCompose from 'docker-compose';
import { logs } from 'docker-compose';
import { db } from '../database/db.js';

class dataManager {
    constructor() {}

    // Función para traer todos los documentos
    async fetchAllDocuments() {
        try {
            const result = await db.allDocs({ include_docs: true });
            const data = result.rows.map(row => row.doc);
            return data;
        } catch (error) {
            throw new Error("Error fetching all documents: " + error);
        }
    }

    // Función para insertar un documento
    async insertDocument(data) {
        try {
            const result = await db.put({
                _id: new Date().toISOString(),
                firstName: data.firstName,
                lastName: data.lastName
            });
            return result;
        } catch (error) {
            throw new Error("Error inserting document: " + error);
        }
    }
}

export const dataM = new dataManager();