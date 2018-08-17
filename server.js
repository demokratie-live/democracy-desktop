import express from 'express';
import next from 'next';
import CONSTANTS from './config/constants';

// const dev = CONSTANTS.NODE_ENV !== 'production';
const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/gesetz/:id/:title', (req, res) => {
      const actualPage = '/details';
      const queryParams = { id: req.params.id, title: req.params.title };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:3000`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
