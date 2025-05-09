//src/utils/registry.test.ts
//This file is used to test the registry.ts file
//run this test by using the command npx ts-node src/utils/registry.test.ts
import express from 'express';
import {registerService, lookupService, setRegistryUrl} from './registry';

//mock server for testing
setRegistryUrl('http://localhost:9999');

// this will create a mock server to test the registry
const app = express();
app.use(express.json());

const registry: Record<string, string> = {}; //used to store the services

//Register service endpoint
app.post('/register', (req, res) =>{
  const { name, url } = req.body;
  registry[name] = url;
  res.status(200).json({ message: 'Registered' });
});

//lookup service endpoint
app.get('/lookup', (req, res) =>{
  const name = req.query.name as string;
  if (registry[name]) {
    res.status(200).json({ url: registry[name] });
  }else{
    res.status(404).json({ error: 'Not found' });
  }
});

//Start
const server = app.listen(9999, () => {
  console.log('Mock Registry running on http://localhost:9999');
});

//ttests
(async () => {
  console.log("Testing");

  await registerService('account', 'http://localhost:4001');
  const accountUrl = await lookupService('account');
  console.log('account link ', accountUrl); //this one should print "http://localhost:4001"

  await registerService('scheduler', 'http://localhost:4002');
  const schedulerUrl = await lookupService('scheduler');
  console.log('scheduler link', schedulerUrl); //Print "http://localhost:4002"

  const notFoundUrl = await lookupService('nonExistent');
  console.log('nonExistent', notFoundUrl); //Print "null"

  server.close();//shuts it all down
})();
