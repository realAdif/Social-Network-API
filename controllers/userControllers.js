const {User, Thoughts} = require('../models');

module.exports ={
    getUsers(req,res){
        User.find()
        .then((user)=> res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req,res){
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    }
}