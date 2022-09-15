const {User, Thoughts} = require('../models');

module.exports ={
    // Get all user
    getUsers(req,res){
        User.find()
        .populate('thoughts')
        .populate('friends')
        .then((user)=> res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    // Create user
    createUser(req,res){
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    // Get a single user
    getSingleUser(req,res){
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('username')
        .then((user) => 
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    // Delete a user
    deleteUser(req,res){
        User.deleteOne({_id: req.params.userId})
        .then((user) =>
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    }   
}