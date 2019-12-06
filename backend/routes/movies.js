const express = require('express');
const { getMovie, getMovies, createMovie } = require('../controllers/movies')

const router = express.Router();


router.route('/').get(getMovies).post(createMovie);
router.route('/:id').get(getMovie);

module.exports =  router;