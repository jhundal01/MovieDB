const Movies = require('../models/Movies');


//Get all movies
//route: GET /api/v1/movies
exports.getMovies = async (req,res,next) =>{
    try{
        const movies = await Movies.find();
        res.status(200).json({success: true, data: movies});
    }
    catch(err){
        res.status(400).json({success: false})
    }
   
};

//get single movie
//route GET/api/v1/movies/:id
exports.getMovie = (req,res,next) =>{
    res.status(200).json({success: true,msg:`Show movie ${req.params.id}`}); 
};

//Create movie
//route POST /api/v1/movies
exports.createMovie = async (req,res,next) =>{
    try{
        const movies = await Movies.create(req.body);
        res.status(201).json({
            success: true,
            data: movies
        })
    }
    catch(err){
        res.status(400).json({success: false})
    }
};



