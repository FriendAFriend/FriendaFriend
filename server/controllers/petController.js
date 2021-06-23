/* 
this script handles the CRUD functionality relating to pet data
*/ 
const db = require('../models/model');

const petController = {};

// GET request for all details related to a pet
petController.getPet = (req, res, next) => {
    const user_id = req.params.user_id;

    const queryParams = [
        user_id
    ];
    const queryString = `SELECT * FROM pet WHERE user_id = $1;`;
    db.query(queryString, queryParams, (err, result) => {
      if (err) return next({ status: 500, message: `Error in petController.getPet: ${err}` });
      res.locals.pets = result.rows; // ! one pet or many? 
      return next();
    });
  };

/* inserts a new value into the pet table */ 
petController.createPet = (req, res, next) => {
    const body = req.body;
    
    const queryParams = [
        body.user_id,
        body.pet_name,
        body.description,
        body.type,
        body.photo
    ];
    const queryString = `INSERT INTO pet (user_id, pet_name, description, type, photo)
                         VALUES ($1, $2, $3, $4, $5);`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.createPet: ${err}` });
        return next();
    });
};

petController.updatePet = (req, res, next) => {
    const body = req.body;

    const queryParams = [
        body.user_id,
        body.pet_name,
        body.descirption,
        body.type,
        body.photo
    ];
    const queryString = `UPDATE pet
                         SET pet_name = $2, description = $3, type = $4, photo = $5
                         WHERE user_id = $1;`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.updatePet: ${err}`});
        return next();
    });
};

petController.deletePet = (req, res, next) => {
    const body = req.body;

    const queryParams = [
        body.user_id,
        body.pet_name,
    ];
    const queryString = `DELETE FROM pet
                         WHERE user_id = $1
                         AND pet_name = $2;`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in petController.deletePet: ${err}`});
        return next();
    });
};

module.exports = petController;