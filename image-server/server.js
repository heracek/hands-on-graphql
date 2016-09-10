import express from 'express';

import { getPlanet } from './src/planet.js';

const IMAGE_SERVER_PORT = process.env.IMAGE_SERVER_PORT || 8004;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Image Server</h1>
        <h2>Planets<h2>
        <ul>
          <li>Sample planet API: <a href="/api/planet/PlanetName?water=45&rotation=0&size=250">/api/planets/PlanetName</a></li>
          <li>Sample planet test with preview: <a href="/test/planet/PlanetName?water=45&rotation=0&size=250">/test/planets/PlanetName</a></li>
          <li>Original source: <a href="http://donjon.bin.sh/scifi/world/">http://donjon.bin.sh/scifi/world/</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/api/planet/:planetName', (req, res) => {
  const { planetName } = req.params;
  const { water, rotation, size } = req.query;

  const planetOptions = {
    name: planetName,
    size,
    water,
    rotation,
  };
  const responseJSON = getPlanet(planetOptions);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseJSON, null, 2));
});

app.get('/test/planet/:planetName', (req, res) => {
  const { planetName } = req.params;
  const { water, rotation, size } = req.query;

  const planetOptions = {
    name: planetName,
    size,
    water,
    rotation,
  };

  const responseJSON = getPlanet(planetOptions);
  const responseJSON180 = getPlanet({
    ...planetOptions,
    rotation: (planetOptions.rotation || 0) + 180,
  });
  res.send(`
    <html>
      <body>
        <a href="/">Home</a>
        <h2>JSON</h2>
        <pre>${JSON.stringify(responseJSON, null, 2)}</pre>
        <h2>Preview</h2>
        <img src="${responseJSON.url}"/>
        <h2>Preview (rotated 180&deg;)</h2>
        <img src="${responseJSON180.url}"/>
      </body>
    </html>
  `);
});

app.listen(IMAGE_SERVER_PORT, () => {
  console.log('Image server listening at localhost:%s', IMAGE_SERVER_PORT);
});
