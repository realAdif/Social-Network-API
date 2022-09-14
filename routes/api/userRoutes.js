const router = require('express').Router();

const {getUsers} = require('../../controllers/userControllers');

router.route('/user').get(getUsers);

module.exports = router;