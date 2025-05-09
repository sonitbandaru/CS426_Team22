// src/utils/mockRegistry.ts
//run this files by using the command npx ts-node src/utils/mockRegistry.ts
import express from 'express';


//this is for testing purposes only. This is a mock registry server that allows us to register and lookup services
//this is not a real registry server. It is used to test the API gateway and the service discovery process
//this is a mock registry server that allows us to register and lookup services
//in order to test this run the following command in the terminal npx ts-node src/utils/mockRegistry.ts
const app = express();
app.use(express.json());

const registry: Record<string, string> = {};

// Register a service
app.post('/register', (req, res) => {
    const { name, url } = req.body;
    registry[name] = url;
    console.log(`Registered: ${name} with ${url}`);
    res.status(200).json({ message: 'Service registered' });
});

// Lookup a service
app.get('/lookup', (req, res) => {
    const name = req.query.name as string;
    if (registry[name]) {
        res.status(200).json({ url: registry[name] });
    } else {
        res.status(404).json({ error: 'Service not found' });
    }
});

//Start the registry server
app.listen(3005, () => {
    console.log('Mock Registry running on http://localhost:3005');
});
