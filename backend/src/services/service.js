import dockerCompose from 'docker-compose';
import { logs } from 'docker-compose';
import { db } from '../database/db.js';
  
class dataManager {
    constructor() {
        this.lastId = 0;
    }
     generateId() {
        lastId++;
        return 'ID_' + lastId;
      }
    
    async fetchAllDocuments() {
        try {
            const result = await db.allDocs({ include_docs: true });
            const data = result.rows.map(row => row.doc);
            return data;
        } catch (error) {
            throw new Error("Error fetching all documents: " + error);
        }
    }

    async insertDocument(data) {
        try {
            console.log("data service inserta"+JSON.stringify(data));
            const result = await db.put({
                _id: new Date().toISOString(),
                // _id: this.generateId(),
                user: data.user,
                fechaHora: new Date().toISOString(),
                tipoAcceso: data.tipoAcceso
            });
            return result;
        } catch (error) {
            throw new Error("Error inserting document: " + error);
        }
    }
}

export const dataM = new dataManager();
