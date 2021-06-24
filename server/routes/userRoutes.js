/* this router will handle all calls to login, update and verify users */

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

<<<<<<< HEAD
// get user information (log in logic)
// router.get('/login', userController.verifyUser, (req, res) => {
//   //if successful to dashbaord
//   console.log('successful login');
//   return res.redirect(200, './api/dashboard');
// });

router.post('/login', userController.verifyUser, (req, res) => {
  //if successful to dashbaord
  console.log('successful login');
  
  //return res.redirect(200, './api/dashboard');
=======
router.get('/login', userController.verifyUser, (req, res) => {
  console.log('successful login');
>>>>>>> 974953ba39fb33f0850c8c4da0b6b348fe4c32e2
  return res.json(res.locals.user)
});

router.get('/getTrips/:user_id', userController.getUserTrips, (req, res) => {
  res.status(200).json(res.locals.userTrips);
})

// post a new user (sign-up logic)
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});


module.exports = router;
