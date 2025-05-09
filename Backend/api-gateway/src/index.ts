//API Gateway for microservices
import express, { Request, Response, NextFunction } from 'express';
import { lookupService } from './utils/registry';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';

dotenv.config();

const PORT = process.env.GATEWAY_PORT || 4000;
const app = express();
app.use(express.json());

//Helper function to proxy requests to the correct microservice
//the parameter req is the request object, res is the response object,
//name is the name of the service to forward to

const forwardRequest = async (serviceName: string, req: Request, res: Response, next: NextFunction) => {
    try{
        //Dynamically find the service URL
        const serviceUrl = await lookupService(serviceName);

        //If the service is not found, send a 404 response
        if(!serviceUrl){
        console.log(`Service not found`);
        res.status(404).json({ error: `${serviceName} not found` });
        return;
        }

        //if the service is found, forward the request
        console.log(`Forwarding request`);
        proxy(serviceUrl)(req, res, next);

    }catch (e){
        //handle errors with a 500 response
        const error = e as Error;
        res.status(500).json({ error: `Internal Server Error: ${error.message}` });
    }
};

//these are the routes for the API Gateway
//These will forward any request to the correct microservice

app.use('/api/account', (req, res, next) => forwardRequest('account', req, res, next));
app.use('/api/scheduler', (req, res, next) => forwardRequest('scheduler', req, res, next));
app.use('/api/meal-database', (req, res, next) => forwardRequest('mealDatabase', req, res, next));

//make sure the API Gateway is running
app.get('/', (req, res) => {
  res.status(200).send('API Gateway is running.');
});

//start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
