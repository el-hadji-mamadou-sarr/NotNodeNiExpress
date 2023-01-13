const express = require('express');
const router = express.Router();
const {getPeople,getSchool} = require('../controllers/people')

//now we can call the controller here
router.get('/',getPeople)
router.get('/school',getSchool)

//oubien

router.route('/').get(getPeople);
router.route('/school').get(getSchool);

module.exports = router;