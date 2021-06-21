/* 
this script handles the CRUD functionality relating to listing data
*/ 
const db = require('../models/model');

const listingController = {};

// GET request for all details related to a listing
listingController.getListing = (req, res, next) => {
    const queryParams = []; // ! _ID
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
      if (err) return next({ status: 500, message: `Error in listingController.getListing: ${err}` });
      res.locals.listings = result.rows; // ! one listing or many? 
      return next();
    });
  };

/* inserts a new value into the listing table */ 
listingController.createListing = (req, res, next) => {
    const queryParams = []; // ! see table
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.createListing: ${err}` });
        return next();
    });
};

listingController.updateListing = (req, res, next) => {
    const queryParams = []; // ! see table
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.updateListing: ${err}`});
        return next();
    });
};

listingController.deleteListing = (req, res, next) => {
    const queryParams = [];
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in listingController.deleteListing: ${err}`});
        return next();
    });
};

module.exports = listingController;