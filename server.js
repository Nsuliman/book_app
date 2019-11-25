'use strict';

/******** dependencies *****/

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const superagent = require('superagent');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.use( express.json() );
server.use( express.urlencoded({extended:true}));
server.use( express.static('./public') );
server.set('view engine', 'ejs');

/*********************************************************************/

/*************** Test Route *****************/
server.get('/test', (req,res) => {
    res.status(200).send('Hello Ya Tester ');
  });

/**************** Render index **************/
  server.get('/main', (req,res) => {
    res.render('pages/index');
  });

/**************** Re-direct index **************/
  server.get('/main', (req,res) => {
    console.log('Got here from a get request ... ', req.query);
    res.redirect('/index.html');
  });

/************************* Test linked HTML file ********************* */
server.get('/incoming', (req,res) => {
    console.log('Got here from a get request ... ', req.query);
    res.redirect('/thanks.html');
  });
  server.post('/incoming', (req,res) => {
    console.log('Got here from a post request ... ', req.body);
    res.redirect('/thanks.html');
  });








server.listen(PORT, () => console.log('listening from port', PORT));
