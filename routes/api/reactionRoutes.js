const router = require('express').Router();
const {createReaction} = require('../../controllers/reactionControllers');

router.route('/').post(createReaction);

module.exports = router;