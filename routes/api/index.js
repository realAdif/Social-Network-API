const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/user',userRoutes);
router.use('/thought', thoughtsRoutes);
router.use('/reaction'.reactionRoutes);

module.exports = router;