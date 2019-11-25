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
server.use(express.urlencoded({ extended: true }));
server.use(express.static('./public'));
server.set('view engine', 'ejs');

/*********************************************************************/

/*************** Test Route *****************/
server.get('/test', (req, res) => {
    res.status(200).send('Hello Ya Tester ');
});

/**************** Render index **************/
server.get('/main', (req, res) => {
    res.render('pages/index');
});

/**************** Re-direct index **************/
server.get('/main', (req, res) => {
    console.log('Got here from a get request ... ', req.query);
    res.redirect('/index.html');
});

/************************* Test linked HTML file ********************* */
server.get('/incoming', (req, res) => {
    console.log('Got here from a get request ... ', req.query);
    res.redirect('/dataBook.html');
});
server.post('/incoming', (req, res) => {
    console.log('Got here from a post request ... ', req.body);
    res.redirect('/dataBook.html');
});


server.get('/books', (req, res) =>{
    let url = 'https://www.googleapis.com/books/v1/volumes?q=books';
    // console.log('urllllllllllllllllllllllllllllll : ', url);
    superagent.get(url)
        .then(data => {
            // // console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Boddddddddddddddy : ', data.body);
            // // console.log('dataaaaaaaaaaaaaaaaaaaaaaaaaaaaa Itemmmmmmmmmmmmmmmms : ', data.body.items);

            // const book = data.body;
            // return book.daily.data.map((day) => {
            //     return new Book(day);
            // });
            res.render('pages/searches/show', { books:data.body.items })

    });
});

    // return superagent.get(url)
    //     .then(data => {
    //         const weather = data.body;
    //         return weather.daily.data.map((day) => {
    //             return new Weather(day);
    //         });
    //     });

    function Book(data) {
        this.id = city;
        this.formatted_query = data.results[0].formatted_address;
        this.latitude = data.results[0].geometry.location.lat;
        this.longitude = data.results[0].geometry.location.lng;

    } // End of location constructor function 



    server.listen(PORT, () => console.log('listening from port', PORT));
