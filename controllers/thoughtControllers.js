const {User, Thoughts} = require('../models');

module.exports ={
    // get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
        .select('-__v')
        .then((dbThoughtsData) => {
            res.json(dbThoughtsData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    // create thoughts
    createThoughts(req,res){
        Thoughts.create(req.body)
        .then((dbThoughtsData) => res.json(dbThoughtsData))
        .catch((err) => res.status(500).json(err));
    }
}