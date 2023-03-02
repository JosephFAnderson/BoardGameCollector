const userRoutes = require('./userRoutes');
const collectionRoutes = require('./collectionRoutes');
const router = require('express').Router();

router.use('/users', userRoutes);
router.use('/collection', collectionRoutes);

module.exports = router;