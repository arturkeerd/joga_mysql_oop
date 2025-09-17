const express = require('express');
const router = express.Router();
const userControllerClass = require('../controllers/user');
const userController = new userControllerClass();

router.post('/user/register', (req, res) => userController.register(req, res));
router.post('/user/login', (req, res) => userController.loginUser(req, res));
router.patch('/user/role/:id', (req, res) => userController.changeRole(req, res));

module.exports = router;