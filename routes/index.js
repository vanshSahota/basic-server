const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/users', userController.getUsers);
router.post('/users', userController.postUsers);
router.get('/users/:id', userController.getSpecificUser);
router.delete('/users/:id', userController.deleteuser);
router.put('/users/:id', userController.getSpecificUser);

// router.post('/users', userController.getUsers)

module.exports = router;