import { registerService } from './registry';
(async () =>{
    console.log("Registering Microservices...");
    await registerService('account', 'http://localhost:4001');
    await registerService('scheduler', 'http://localhost:4002');
    await registerService('mealDatabase', 'http://localhost:4003');
    console.log("All Microservices Registered Successfully");
})();
