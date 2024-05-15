const express = require('express');
const router = express.Router();

const multer = require('multer')  //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. Multer will not process any form which is not multipart 
const { storage } = require('../cloudinary');
const upload = multer({ storage })

const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/expressError');

const Campground = require('../models/campground');

const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

const campgrounds = require('../controllers/campgrounds');

// const uploadImages = upload.array('images'); //  uploadImages is a function that uploads an array of images

router.route('/')
    .get(campgrounds.index)
    .post(isLoggedIn, upload.array('images'), validateCampground, catchAsync(campgrounds.createCampground))


router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('images'), validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, campgrounds.deleteCampground);

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));





module.exports = router;