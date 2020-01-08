'use strict';

/******** dependencies *****/

require('dotenv').config();

const express = require('express');

const cors = require('cors');

const superagent = require('superagent');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());

server.use(express.json());
server.use(express.static('./public'));
server.use(express.urlencoded({ extended: true }));
server.set('view engine', 'ejs');

/*********************************************************************/

/*************** Test Route *****************/
// server.get('/test', (req, res) => {
//     res.status(200).send('Hello Ya Tester ');
// });

// /**************** Render index **************/
// server.get('/main', (req, res) => {
//     res.render('pages/index');
// });

// /**************** Re-direct index **************/
// server.get('/main', (req, res) => {
//     console.log('Got here from a get request ... ', req.query);
//     res.redirect('/index.html');
// });

// /************************* Test linked HTML file ********************* */
// server.get('/incoming', (req, res) => {
//     console.log('Got here from a get request ... ', req.query);
//     res.redirect('/dataBook.html');
// });
// server.post('/incoming', (req, res) => {
//     console.log('Got here from a post request ... ', req.body);
//     res.redirect('/dataBook.html');
// });

/****************** ERRORS ********************* */

server.get('/error', (request, response) => {
    response.render('pages/error');
});

/*************************************** */

server.get('/searches', (req, res) => {
    res.render('pages/index');
});

server.post('/searches', (req, res) => {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=';
    // console.log('urllllllllllllllllllllllllllllll : ', url);

    if (req.body.searchtype === 'title') {
        url = url + req.body.search;
    }
    else if (req.body.searchtype === 'author') {
        url = url + req.body.search;
        // console.log(url)
    }

    superagent.get(url)
        .then(data => {
            // console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Boddddddddddddddy : ', data.body);
            // console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Itemmmmmmmmmmmmmmmms : ', data.body.items);

            let book = data.body.items;
            res.render('pages/searches/show', { books: book })
            // return book.items.map((rest) => {
            //     console.log(' rest : ', rest);
            //  new Book(book);
        })
        .catch(error => {
            console.log('Errorrrrrrrrrrrr : ', error);
            res.render('pages/error');
        });
});

    /******************** Select Book ******************* */

    server.get('/selectbook', (req, res) => {
        res.render('pages/searches/show');
    });
    server.post('/selectbook',selectedbook);

    function selectedbook(req, res) {
        let { title, authors, isbn, image, desc } = req.body
        res.render('pages/searches/new', { book: req.body })
    }
// function Book(data) {
//     this.title = data.volumeInfo.title;
//     this.author = data.volumeInfo.authors && data.volumeInfo || '';
//     this.ISBN = data.volumeInfo.industryIdentifiers.type && data.volumeInfo.industryIdentifiers || '';
//     this.image = data.imageLinks.thumbnail && data.imageLinks || '';
//     this.description = data.volumeInfo.description && data.volumeInfo || '';

// } // End of location constructor function 



server.listen(PORT, () => console.log('listening from port', PORT));
