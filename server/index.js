require('dotenv/config');
const express = require('express');
const next = require('next');
const { join } = require('path');
const { parse } = require('url');

const Router = require('./routes').Router;

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    Router.forEachPattern((page, pattern, defaultParams) =>
      server.get(pattern, (req, res) =>
        app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params)),
      ),
    );
    // path.join(__dirname, '../static', 'favicon.ico')

    server.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true);
      const rootStaticFiles = [
        '/apple-touch-icon-57x57.png',
        '/apple-touch-icon-60x60.png',
        '/apple-touch-icon-72x72.png',
        '/apple-touch-icon-76x76.png',
        '/apple-touch-icon-114x114.png',
        '/apple-touch-icon-120x120.png',
        '/apple-touch-icon-144x144.png',
        '/apple-touch-icon-152x152.png',
        '/favicon-16x16.png',
        '/favicon-32x32.png',
        '/favicon-96x96.png',
        '/favicon-128.png',
        '/favicon-196x196.png',
        '/favicon.ico',
        '/mstile-70x70.png',
        '/mstile-144x144.png',
        '/mstile-150x150.png',
        '/mstile-310x150.png',
        '/mstile-310x310.png',
      ];

      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, '../static', parsedUrl.pathname);
        return app.serveStatic(req, res, path);
      }
      return handle(req, res);
    });
    server.listen(port);
  })
  .catch(ex => {
    // eslint-disable-next-line
    console.error(ex.stack);
    process.exit(1);
  });
