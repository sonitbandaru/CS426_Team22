//created this to test mockservices
import express from 'express';

const createService = (port: number, name: string) => {
    const app = express();
    app.use(express.json());

    app.use('*', (req, res) => {
        console.log(`[MOCK SERVICE] ${name} received request at: ${req.path}`);
        res.json({
            message: `Response from ${name}`,
            path: req.path,
            method: req.method
        });
    });

    app.listen(port, () => {
    console.log(`[MOCK SERVICE] ${name} running on http://localhost:${port}`);
  });
};

createService(4001, 'Account Service');
createService(4002, 'Scheduler Service');
createService(4003, 'Meal Database Service');
