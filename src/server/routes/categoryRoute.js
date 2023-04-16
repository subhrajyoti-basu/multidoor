const express = require('express');
const { addCategory } = require('../controllers/categoryController');


// Router Object
const router = express.Router();

// ADD NEW CATEGORY || POST
router.get('/add-category', addCategory)

// DELETE CATEGORY || DELETE
// router.get('/add-category',)

// SHOW CATEGORIES || GET
// router.get('/add-category',)

module.exports = router;