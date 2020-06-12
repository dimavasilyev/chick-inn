const next = require('next');
const bodyParser = require('body-parser');
const express = require('express');
const { configureRoutes } = require('./routes');

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()

  .then(() => {
    const server = express();
    server.use(bodyParser.json()); // to support JSON-encoded bodies

    configureRoutes(server);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Ready on ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
