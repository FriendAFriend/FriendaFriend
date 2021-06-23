/* this router will handle all calls to login, update and verify users */ 

const express = require('express'); 
const userController = require('../controllers/userController');
const router = express.Router(); 

// get user information (log in logic)
router.get('/login',
    userController.verifyUser, 
    (req, res) => {
        //if successful to dashbaord
        res.status(200).json(res.locals.user);
});

// post a new user (sign-up logic)
router.post('/signup', 
    userController.createUser,
    (req, res) => {
        res.status(200).json(res.locals.user);
});

module.exports = router;