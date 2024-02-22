const express = require('express');

const app = express();

app
  .get('/', (req, res) => res.send('API Rest com os dados das cards de YU-GI-OH.'))
  .use(
    express.json(),
    express.urlencoded({
      extended: true,
    })
  )

module.exports = app;