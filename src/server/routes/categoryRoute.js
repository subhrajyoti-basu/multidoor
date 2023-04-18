const express = require('express');
const { addCategory, deleteCategory, getCategory, updateCategory } = require('../controllers/categoryController');
const { requireSignIn } = require('../middlewares/authMiddleware');
const { isSeller } = require('../middlewares/authMiddleware');



// Router Object
const router = express.Router();

// ADD NEW CATEGORY || POST
router.post('/add-category', requireSignIn, isSeller, addCategory)

// DELETE CATEGORY || DELETE
router.delete('/delete-category/:slug', requireSignIn, isSeller, deleteCategory)

// UPDATE CATEGORY || PUT
router.put('/update-category/:id', updateCategory)

// SHOW CATEGORIES || GET
router.get('/get-categories', getCategory)

module.exports = router;