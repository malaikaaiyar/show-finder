const getMovie = require('./utils/get-movie')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const http = require('http')

const port = process.env.PORT || 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const request = require('request');

app.get('/rating', (req, res, next) => {
    if (!req.query.title){
        return res.send({
            error: 'You must provide a title'
        })
    }

    getMovie(req.query.title, (error, data) => {
        if (error) {
            return res.send({ error })
        }
        res.send({
            title: data.Title,
            rated: data.Rated,
            genre: data.Genre,
            imdbRating: data.imdbRating,
            director: data.Director, 
            plot: data.Plot,
            cast: data.Actors,
            image: data.Poster
        })
    })
})

app.get('/', (req, res, next) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('server is up on port 3000')
})
