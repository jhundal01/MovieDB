const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, 'Movie name needed'],
        unique: true,
        trim: true
    },
    // slug: String,
    BoxOffice:{
        type: String,
        trim: true
    },
    Rated:{
        type: String,
        trim: true
    },
    Year:{
        type: String,
        trim: true
    },
    Runtime:{
        type: String,
        trim: true
    },
    Plot:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Movies',MovieSchema);