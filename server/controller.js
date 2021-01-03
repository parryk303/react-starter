const model = require('./model.js');

let controller = {
    post: function(req,res) {
        let values = [];
        let data = req.body;

        for (let key in data) {
            if (key !== 'info') {
                values.push(data[key]);
            }
        }
        values = values.concat(data.info);

        model.post(values, (err, response) => {
            if (err) {
                console.log(err);
                res.send('error with database')
            }
            res.send('data successfully added')
        })
    },
    get: function(req, res) {
      model.get((err, result)=> {
        if (err) {
            console.log(err);
            res.send('problem with database')
        }
        res.send(result);
      })
    }
}

module.exports = controller;