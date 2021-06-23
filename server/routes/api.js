/* this router will handle API calls to handle listings, photos and pets */ 

const express = require('express'); 
const listingController = require('../controllers/listingController');
const photoController = require('../controllers/photoController');
const petController = require('../controllers/petController');
const router = express.Router(); 

// default for dashboard view should display all listings (pagination will come later)
router.get('/dashboard', 
  listingController.getAllListings, 
  (req, res) => {
    res.status(200).json(res.locals.listings);
  }
);

// page for only the user's own listings
router.get('/myListings', 
  listingController.getListing,
  (req, res) => {
    res.status(200).json(res.locals.listings);
  }
);

// post request creates a listing with associated pet and photos table insertions
router.post('/newListing',
  listingController.createListing,
  // ! do we then want to reroute them to the dashboard and display all listings? 
  (req, res) => {
    // res.redirect('/dashboard');
    res.status(200).json(res.locals.listing);
  }
);

router.post('/newPet',
  listingController.createListing,
  // ! do we then want to reroute them to the dashboard and display all listings? 
  (req, res) => {
    // res.redirect('/dashboard');
    res.status(200).json(res.locals.listing);
  }
);

// update an already-created listing; different from routes for deleting or adding photos
router.put('/updateListing', 
  listingController.updateListing,
  (req, res) => {
    // res.redirect('/dashboard');
    res.status(200).json(res.locals.listing);
  }
);

router.post('/newPhoto', 
  photoController.createPhoto,
  (req, res) => {
    res.status(200).json(res.locals.photos);
  }
);

// delete a listing permanently, associated photos and pet
router.delete('/', 
  listingController.deleteListing,
  photoController.deletePhoto,
  petController.deletePet,
  (req, res) => {
    res.redirect('/dashboard');
    //res.status(200).json(res.locals.listing);
  }
);

module.exports = router;