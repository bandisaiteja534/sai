const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/Yogi', ctrlLocations.locationInfo); // Using a more RESTful route structure
router.get('/Laxmi', ctrlLocations.locationInfo1);
router.get('/The', ctrlLocations.locationInfo2);
router.get('/locations/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
