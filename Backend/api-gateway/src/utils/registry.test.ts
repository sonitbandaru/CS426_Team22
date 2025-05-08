//src/utils/registry.test.ts
import express from 'express';
import { registerService, lookupService, setRegistryUrl } from './registry';

//mock server
setRegistryUrl('http://localhost:9999');

//Create an Express app to mock the registry
const app = express();
app.use(express.json());

const registry: Record<string, string> = {};

//Register service endpoint
app.post('/register', (req, res) => {
  const { name, url } = req.body;
  registry[name] = url;
  res.status(200).json({ message: 'Registered' });
});

//lookup service endpoint
app.get('/lookup', (req, res) => {
  const name = req.query.name as string;
  if (registry[name]) {
    res.status(200).json({ url: registry[name] });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

//Start server
const server = app.listen(9999, () => {
  console.log('Mock Registry running on http://localhost:9999');
});

//Run tests
(async () => {
  console.log("Testing Service Registration and Lookup");

  await registerService('account', 'http://localhost:4001');
  const accountUrl = await lookupService('account');
  console.log('account →', accountUrl); //this one hould print "http://localhost:4001"

  await registerService('scheduler', 'http://localhost:4002');
  const schedulerUrl = await lookupService('scheduler');
  console.log('scheduler →', schedulerUrl); //Print "http://localhost:4002"

  const notFoundUrl = await lookupService('nonExistent');
  console.log('nonExistent →', notFoundUrl); //Print "null"

  server.close();//shuts it all down
})();
