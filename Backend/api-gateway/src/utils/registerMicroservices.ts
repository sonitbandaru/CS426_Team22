//run ts-node src/utils/registerMicroservices.ts to register the microservices with the API Gateway
//shortcut script to manually register services
//in the future, this will be done automatically by the microservices themselves
import { registerService } from './registry';
(async () =>{
    console.log("Registering Microservices...");
    await registerService('account', 'http://localhost:4001');
    await registerService('scheduler', 'http://localhost:4002');
    await registerService('mealDatabase', 'http://localhost:4003');
    console.log("All Microservices Registered Successfully");
})();
