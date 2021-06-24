/* this router will handle all calls to login, update and verify users */

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/login', userController.verifyUser, (req, res) => {
  console.log('successful login');
  return res.json(res.locals.user)
});

router.get('/getTrips/:user_id', userController.getUserTrips, (req, res) => {
  console.log("hit the return fro get trips")
  res.status(200).json(res.locals.userTrips);
})

// post a new user (sign-up logic)
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});


module.exports = router;
