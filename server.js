/* import next from 'next';
import express from 'express';
import CONSTANTS from './config/constants'; */

const next = require("next");
const express = require("express");
const CONSTANTS = require("./config/constants");

const dev = CONSTANTS.NODE_ENV !== 'production';
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

    server.listen(CONSTANTS.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${CONSTANTS.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
