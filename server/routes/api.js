const express = require('express'); 
const listingController = require('../controllers/listingController');
const router = express.Router(); 

router.get('/', 
  listingController.getListing, 
  (req, res) => {
    res.status(200).json(res.locals.listing);
  }
);

router.post('/',
  listingController.createListing,
  (req, res) => {
    res.status(200).json(res.locals.listing);
  }
);

router.put('/', 
  listingController.updateListing,
  (req, res) => {
    res.status(200).json(res.locals.listing);
  }
);

router.delete('/', 
  listingController.deleteListing,
  (req, res) => {
    res.status(200).json(res.locals.listing);
  }
)

module.exports = router;