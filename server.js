'use strict';

/******** dependencies *****/

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const superagent = require('superagent');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

/*********************************************************************/

// Home Route (http://localhost:3000/)
server.get('/', (request, response) => {
    console.log(request);
    response.status(200).send('Weclome To Our Book App');
  });











server.listen(PORT, () => console.log('listening from port', PORT));
