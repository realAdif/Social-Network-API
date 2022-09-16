const router = require('express').Router();
const {getThoughts,createThoughts,getSingleThought} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);
router.route('/:userId').get(getSingleThought)

module.exports = router;