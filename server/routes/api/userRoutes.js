const router = require('express').Router();

const {
    getUser,
    createUser,
    updateUser
} = require('../../controllers/userController');

router.route('/').post(createUser);

router.route('/:id').get(getUser).put(updateUser);

module.exports = router;