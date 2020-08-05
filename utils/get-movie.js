const request = require('request')

const getMovieInfo = (title, callback) => {
    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=aaa1d68f&t=' + title
    request({ url, json: true }, (error, { body }) => {
        if (error){
            callback(error, undefined)
        } else if (body.Error) {
            callback(body.Error, undefined)
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = getMovieInfo