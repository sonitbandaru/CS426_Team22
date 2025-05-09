//src/utils/registry.ts
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

//used for testing. This is the URL of the registry server

export let REGISTRY_URL = process.env.REGISTRY_URL || 'http://localhost:3005';

//this function allows the test to override it and use its own mock server
export const setRegistryUrl = (url: string) => {
  REGISTRY_URL = url;
};

//Register a service with the registry so the gateway can discover it
//parameter name indicates the service name (account, scheduler, mealDatabase)
//parameter url indicates where the service is running
//Most code is inspired from slides LP5.A
export const registerService = async (name: string, url: string) =>{
    try{
        await fetch(`${REGISTRY_URL}/register`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, url }),
        });
        console.log(`Registered service: ${name} at ${url}`);
    }catch (error: any){ 
        console.error(`Failed to register service: ${name}. Error: ${error.message}`);
    }
};


 //Looks up a service URL from the central registry
 //Parameter name is the name of the service
 //this will return the URL of the service if found, else, null
export const lookupService = async (name: string): Promise<string | null> => {
    try{
        const response = await fetch(`${REGISTRY_URL}/lookup?name=${name}`);
        if (response.ok) {
            const data = (await response.json()) as { url: string };
            return data.url;
        } else {
            console.warn(`cant find service: ${name}`);
            return null;
        }
    } catch (error: any) {  
        console.error(`Error looking up service: ${name}. Error: ${error.message}`);
        return null;
    }
};
