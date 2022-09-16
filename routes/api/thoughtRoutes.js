const router = require('express').Router();
const {getThoughts,createThoughts,getSingleThought,deleteThought} = require('../../controllers/thoughtControllers');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);
router.route('/:thoughtId').get(getSingleThought);
router.route('/delete/:thoughtId').get(getSingleThought).delete(deleteThought)

module.exports = router;