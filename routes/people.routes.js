const express = require("express")
const Person = require("../models/person.model")
const router = express.Router()

router.get("/person/:person_id", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person = await Person.findOne({_id: person_id}).populate("movieCredits.movie","title overview")
    res.json({
        data: person
    })
})
router.get("/person/:person_id/movie_credits", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person_credits = await Person.find({_id: person_id}).select("movieCredits").populate("movieCredits.movie","title overview")
    res.json({
        data: person_credits
    })
})
router.get("/person/:person_id/images", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person_image = await Person.find({_id: person_id}).select('profileImage')
    res.json({
        data: person_image
    })
})

module.exports = router

