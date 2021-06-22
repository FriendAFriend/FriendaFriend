/* 
this script handles the CRUD functionality relating to photo data
* * note that adding and removing photos will require working with buffers * * 
*/ 
const db = require('../models/model');

const photoController = {};

// GET request for photo table
photoController.getPhoto = (req, res, next) => {
    const body = req.body;

    const queryParams = [
        body.user_id,
        body.img
    ];
    const queryString = `SELECT * FROM photo 
                         WHERE user_id = $1;`;
    db.query(queryString, queryParams, (err, result) => {
      if (err) return next({ status: 500, message: `Error in photoController.getPhoto: ${err}` });
      res.locals.photos = result.rows; // ! one photo or many? 
      return next();
    });
  };

/* inserts a new value into the photo table */ 
photoController.createPhoto = (req, res, next) => {
    const body = req.body;

    const queryParams = [
        body.user_id,
        body.img
    ];
    const queryString = `INSERT INTO photo
                         VALUES img = $1
                         WHERE user_id = $1`;
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in photoController.createPhoto: ${err}` });
        return next();
    });
};

photoController.deletePhoto = (req, res, next) => {
    const body = req.body;

    const queryParams = [
        body.user_id,
        body.img,
    ];
    const queryString = `DELETE FROM photo
                         WHERE user_id = $1
                         AND img = $2;`
    db.query(queryString, queryParams, (err, result) => {
        if (err) return next({ status: 500, message: `Error in photoController.deletePhoto: ${err}`});
        return next();
    });
};

module.exports = photoController;