const {User, Thought} = require('../models');

module.exports = {
    // create reaction
    createReaction(req,res){
        Thought.create(req.body)
        .catch((err) => res.status(500).json(err));
    }
}