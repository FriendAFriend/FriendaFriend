/* 
this script handles the CRUD functionality relating to listing data
*/
const db = require('../models/model');

const listingController = {};

// GET request for all details related to a listing
listingController.getListing = (req, res, next) => {
  const user_id = req.params.user_id;

  const queryParams = [user_id]; // ! _ID
  const queryString = `SELECT * FROM public."listing"
                         WHERE user_id = $1;`;
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in listingController.getListing: ${err}`,
      });
    res.locals.listings = result.rows[0]; // ! one listing or many?
    return next();
  });
};

// returns all listings from the table where status is active/available
listingController.getAllListings = (req, res, next) => {
  const queryString = `SELECT * FROM listing;`;
  db.query(queryString, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in listingController.getAllListings: ${err}`,
      });
    res.locals.allListings = result.rows;

    next();
  });
};

/* inserts a new value into the listing table */
listingController.createListing = (req, res, next) => {
  const body = req.body;
  // const user_id= req.params.user_id;

  //    console.log(user_id, 'is here !')
  console.log(req.body);
  const queryParams = [
    body.user_id,
    body.listing_name,
    body.start_date,
    body.end_date,
    body.pending_status,
    body.rating,
    body.photo,
    body.city,
  ];
  const queryString = `INSERT INTO "public"."listing" (user_id, listing_name, start_date, end_date, pending_status, rating, photo)
                         VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in listingController.createListing: ${err}`,
      });
      res.locals.listing = result.rows[0];
    return next();
  });
};

listingController.updateListing = (req, res, next) => {
  const body = req.body;
  const user_id = req.params.user_id;

  const queryParams = [
    body.listing_id,
    // user_id,
    body.pending_status,
    body.booked_by,
  ]; // ! see table
  const queryString = `UPDATE public."listing"
                        SET pending_status = $2, booked_by = $3
                         WHERE listing_id = $1;`;
                         //SET listing_name = $2 , start_date = $3, end_date = $4, pending_status = $5, rating = $6, photo = $7, city = $8, booked_by = $9
                         //  SET listing_name = $3, start_date = $4, end_date = $5, pending_status = $6, rating = $7, photo = $8, city = $9, booked_by = $10
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in listingController.updateListing: ${err}`,
      });
    res.locals.listing = result.rows;
    return next();
  });
};

listingController.deleteListing = (req, res, next) => {
  const body = req.body;
  const user_id = req.params.user_id;

  const queryParams = [user_id, body.listing_name];
  const queryString = `DELETE FROM listing
                         WHERE user_id = $1
                         AND listing_name = $2`;
  db.query(queryString, queryParams, (err, result) => {
    if (err)
      return next({
        status: 500,
        message: `Error in listingController.deleteListing: ${err}`,
      });
    return next();
  });
};

module.exports = listingController;
