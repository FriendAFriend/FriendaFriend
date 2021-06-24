/* 
this script handles CRUD functionality for user schema for sign-up, login, authentication
*/

const db = require('../models/model');
const bcrypt = require('bcrypt');
const { setAuthToken, setCookie, verifyJWT } = require('./authController');

const userController = {};

// find a user by email
// ! what if we don't find any user with that email?
// sets the user row onto res.locals.user
userController.getUser = (req, res, next) => {
  const body = req.body;
  const queryParams = [body.email];
  const queryString = `SELECT * FROM public."user"
                        WHERE email = $1;`;
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in userController.getUser. ${err}`,
      });

    res.locals.user = 'User does not exist' || result.rows[0];
    return next();
  });
};

userController.getUserTrips = (req, res, next) => {
  const params = req.params
  console.log('here are PARAMS :', params);
  const queryParams = [
    params.user_id
  ];

  const queryString = `SELECT * FROM public."listing"
                       WHERE booked_by = $1;`;

  db.query(queryString, queryParams, (err, result) => {
    if(err)
    return next({
      status: 500,
      message: `Error in userController.getUserTrips ${err}`
    });
    console.log(result.rows);
    res.locals.userTrips = result.rows;
    return next();
  })
}

/* finds a user by email and compares the password with bcrypt user row is saved to res.locals.user */
userController.verifyUser = async (req, res, next) => {
  const body = req.body;
  const token = req.cookies.jwt;
 console.log(body)
  // console.log('here is req.cookies ', token);
  // console.log('here is password ', body.password);
  // const isVerified = await verifyJWT(token, body.password, res, next);
  // console.log('this is verified :', isVerified);

  // if (isVerified) {
    
  //   return next();
  // }

  const queryParams = [body.email];
  const queryString = `SELECT * FROM public."user"
                       WHERE email = $1;`;
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in userController.verifyUser: ${err}`,
      });
    if (result.rows.length === 0) {
      return res.status(400).json({
        userVerified: false,
        message: 'User not found. Please check email.',
      });
    }
    bcrypt.compare(body.password, result.rows[0].password, (err, isMatched) => {
      if (isMatched === false) {
        return res.redirect(401, '../routes/userRoutes/signup');
        // return res.status(400).json({ userVerified: false, message: 'Password incorrect.'});
      }
      res.locals.user = result.rows[0];
      console.log(res.locals.user, 'here is user');
      return next();
    });
  });
};

// creates a user row with bcrypted password
// TODO does not seem to have collision handling for an already created user?
// try catch to send create user error, err
userController.createUser = async (req, res, next) => {
  const body = req.body;
  console.log('body in createUser', body);
  const SALT_FACTOR = 10;

  const hashedPassword = await bcrypt.hash(body.password1, SALT_FACTOR);
  console.log(hashedPassword)

  const queryParams = [
    body.legal_name,
    body.pet_count,
    body.username,
    hashedPassword,
    body.email,
  ];
  const queryString = `INSERT INTO public."user" (legal_name, pet_count, username, password, email)
                       VALUES ($1, $2, $3, $4, $5);`;
  db.query(queryString, queryParams, async (err, result) => {
    console.log(err, 'here is error in create user');
    if (err) return next(err.detail, 'Username or email already exist');
    console.log('here is token line 1');
    const token = await setAuthToken(body.username, body.password1);
    console.log(token, 'here is token');
    const testCookie = await setCookie(token, res);
    console.log(testCookie.jwt, 'hereh is cookies in UC');
    res.locals.user = result.rows[0];
    return next();
  });
};

module.exports = userController;