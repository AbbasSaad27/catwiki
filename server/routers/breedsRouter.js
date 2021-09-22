//dependencies
const express = require('express');
//internal imports
const { getAllBreeds, searchBreeds } = require('../controllers/breedsController');

//initialise router
const router = express.Router();

router.get('/', getAllBreeds);
router.get('/search/:name', searchBreeds);

//export the router
module.exports = router;
