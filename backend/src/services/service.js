const { Request, Response } = require('express');
const { db } = require('../database/db');
// const { Juego } = require('../model/juego.interface');

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
                ...data
            });
            return result;
        } catch (error) {
            throw new Error("Error inserting document: " + error);
        }
    }
}

export const dataManager = new dataManager();