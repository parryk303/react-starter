const db = require('./database.js');

let model = {
    post: (params, callback) => {
        let queryStr = 'insert into movies (title, id, display, watched,\
             overview, vote_average, release_date, poster_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        db.query(queryStr, params, (err, results) => {
            callback(err,results);
        })
    },

    get: (callback) => {
      let queryStr = 'SELECT * from movies'
      db.query(queryStr, (err, results) => {
        let formatted = results.map((movie) => {
          let movieInfo = [movie.overview, movie.vote_average, movie.release_date, movie.poster_path]
          let obj = {
            title: movie.title,
            id: movie.id,
            display: !!movie.display,
            watched: !!movie.watched,
            info: movieInfo
          }
          return obj;
        })
        callback(err, formatted);
      })
    }
}

module.exports = model;