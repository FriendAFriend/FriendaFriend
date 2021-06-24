/* this router will handle all calls to login, update and verify users */

const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

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
  return res.json(res.locals.user)
  ///no need for redirect here
});

router.get('/getTrips', userController.getUserTrips, (req, res) => {
  res.status(200).json(res.locals.userTrips);
})

// post a new user (sign-up logic)
router.post('/signup', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});


module.exports = router;
