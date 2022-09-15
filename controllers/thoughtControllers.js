const {User, Thought} = require('../models');

module.exports ={
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
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
        Thought.create(req.body) 
        .then((dbThoughtsData) =>{ 
            return User.findOneAndUpdate(
                {   _id: req.body.userId

                },
                {
                    $push: {thoughts: dbThoughtsData._id}
                },
                {
                    new: true
                }
            )
        })
        .then((dbUserData) => {
            if(!dbUserData){
                return res.status(404).json({message: 'Can not find user, Thought as been made'})
            }
            res.status(200).json({message: 'Your though as been made'})
        })
        .catch((err) => res.status(500).json(err));
    }
}