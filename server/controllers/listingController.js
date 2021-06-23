/* 
this script handles the CRUD functionality relating to listing data
*/ 
const db = require('../models/model');

const listingController = {};

// GET request for all details related to a listing
listingController.getListing = (req, res, next) => {
    const body = [req.body];

    const queryParams = [
        body.user_id,
        body.listing_name,
        body.start_date,
        body.end_date,
        body.pending_status,
        body.rating,
        body.photo
    ]; 
    const queryString = `SELECT * FROM listing
                         WHERE user_id = $1;`;
    db.query(queryString, queryParams, (err, result) => {
      if (err) return next({ status: 500, message: `Error in listingController.getListing: ${err}` });
      res.locals.listings = result.rows[0]; // ! one listing or many? 
      return next();
    });
  };

// returns all listings from the table where status is active/available 
listingController.getAllListings = (req, res, next) => {
    const queryString = `SELECT * FROM listing;`;
    db.query(queryString, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.getAllListings: ${err}`});
        res.locals.listings = result.rows;
        return next();
    });
};

/* inserts a new value into the listing table */ 
listingController.createListing = (req, res, next) => {
    const body = [req.body];

    const queryParams = [
        body.user_id,
        body.listing_name,
        body.start_date,
        body.end_date,
        body.pedning_status,
        body.rating,
        body.photo
    ];
    const queryString = `INSERT INTO listing
                         VALUES user_id = $1, listing_name = $2, start_date = $3, end_date = $4, pedning_status = $5, rating = $6, photo = $7;`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.createListing: ${err}` });
        return next();
    });
};

listingController.updateListing = (req, res, next) => {
    const body = [res.body];
    
    const queryParams = [
        body.user_id,
        body.listing_name,
        body.start_date,
        body.end_date,
        body.pedning_status,
        body.rating,
        body.photo
    ]; // ! see table
    const queryString = `UPDATE listing
                         SET listing_name = $2, start_date = $3, end_date = $4, pending_status = $5, rating = $6, photo = $7
                         WHERE user_id = $1;`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.updateListing: ${err}`});
        return next();
    });
};

listingController.deleteListing = (req, res, next) => {
    const body = [req.body];

    const queryParams = [
        body.user_id
    ];
    const queryString = `DELETE FROM listing
                         WHERE user_id = $1
                         AND listing_name = $2`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.deleteListing: ${err}`});
        return next();
    });
};

module.exports = listingController;