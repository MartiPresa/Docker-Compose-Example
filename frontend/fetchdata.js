// fetchData.js
import axios from 'axios';

const fetchAllDocuments = async () => {
    try {
        const response = await axios.get('http://localhost:3000/data'); // URL del endpoint
        const data = response.data;
        data.forEach(doc => {
            console.log(`${doc.firstName} ${doc.lastName}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

const insertDocument = async () => {
    try {
        const newDoc = {
            firstName: "Caro",
            lastName: "Pardiaco"
        };
        const response = await axios.post('http://localhost:3000/data', newDoc); // URL del endpoint
        console.log('Document inserted:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};

await insertDocument();
fetchAllDocuments();
