const {User, Thought,Reaction} = require('../models');

module.exports = {
    // create reaction
    createReaction(req,res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        )
        .catch((err) => res.status(500).json(err));
    }
}