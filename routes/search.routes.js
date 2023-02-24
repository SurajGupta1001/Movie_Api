const express = require("express")
const Person = require("../models/person.model")
const Movie = require("../models/movie.models")
const router = express.Router()

router.get("/search/movie/", async(req,res,next)=> {
    const movie_title = req.query.movie_title
    const movie = await Movie.findOne({title: movie_title})
    res.json({
        data: movie
    })
})
router.get("/search/person/", async(req,res,next)=> {
    const person_name = req.query.person_name
    const person = await Person.find({name: person_name})
    res.json({
        data: person
    })
})

module.exports = router