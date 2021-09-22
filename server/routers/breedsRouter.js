//dependencies
const express = require('express');
//internal imports
const { getAllBreeds, searchBreeds, topTenBreeds } = require('../controllers/breedsController');

//initialise router
const router = express.Router();

// router.get('/migrate', migrateBreeds); //!Disabled Route

router.get('/', getAllBreeds);
router.get('/top-ten-breeds/', topTenBreeds);
router.get('/:name', searchBreeds);

//export the router
module.exports = router;
