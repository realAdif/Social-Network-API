const connection = require('../config/connection');
const {User, Thoughts} = require('../models');

User.create(
    {
        username: 'Aditya',
        email: 'fakeemail@gmail.com'
    },
    
);
User.create(
    {
        username: 'Rick',
        email: 'fakeemail@gmail.com'
    },
    (err) => (err ? handleError(err) : console.log('Created new document'))
);
User.create(
    {
        username: 'Morty',
        email: 'fakeemail@gmail.com'
    },
    
);
module.exports = User;