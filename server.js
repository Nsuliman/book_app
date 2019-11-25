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
    res.redirect('/dataBook.html');
  });
  server.post('/incoming', (req,res) => {
    console.log('Got here from a post request ... ', req.body);
    res.redirect('/dataBook.html');
  });


  server.get('/books', (req,res) => {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=books';
    // console.log(' \n\n\n urllllllllllllllllllllllllllllll : ', url);
     superagent.get(url)
      .then( data => {
        console.log(' \n\n\n dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Boddddddddddddddy : ', data.body);
        console.log('\n\n\n dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Itemmmmmmmmmmmmmmmms : ', data.body.items);
        // const book = data.body;
        res.render('pages/searches/show' , {books:data.body.items});
        return data.body.items.map( c =>
        {
            // return new Book (c)}); 
      });
  });
      const weather = data.body;
      return weather.daily.data.map((day) => {
        return new Weather(day);
      });
    });

  function Book(data) {
    this.id = data.id;
    this.url_img = data.volumeInfo.imageLinks.thumbnail;    
    this.title = data.volumeInfo.title;
    this.author = data.volumeInfo.authors;
    this.description = data.volumeInfo.description;
  
  } // End of location constructor function 



server.listen(PORT, () => console.log('listening from port', PORT));
