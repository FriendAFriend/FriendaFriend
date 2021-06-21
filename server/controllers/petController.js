/* 
this script handles the CRUD functionality relating to pet data
*/ 
const db = require('../models/model');

const petController = {};

// GET request for all details related to a pet
petController.getPet = (req, res, next) => {
    const queryParams = []; // ! _ID
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
      if (err) return next({ status: 500, message: `Error in petController.getPet: ${err}` });
      res.locals.pets = result.rows; // ! one pet or many? 
      return next();
    });
  };

/* inserts a new value into the pet table */ 
petController.createPet = (req, res, next) => {
    const queryParams = []; // ! see table
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.createPet: ${err}` });
        return next();
    });
};

petController.updatePet = (req, res, next) => {
    const queryParams = []; // ! see table
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.updatePet: ${err}`});
        return next();
    });
};

petController.deletePet = (req, res, next) => {
    const queryParams = [];
    const queryString = ``;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.deletePet: ${err}`});
        return next();
    });
};

module.exports = petController;