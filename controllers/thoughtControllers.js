const {User, Thoughts} = require('../models');

module.exports ={
    getThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .then((dbThoughtsData) => {
            res.json(dbThoughtsData);
            console.log("this working")
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
}