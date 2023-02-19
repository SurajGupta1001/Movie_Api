const express = require("express")
const Person = require("../models/person.model")
const router = express.Router()

router.get("/person/:person_id", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person = await Person.find({_id: person_id})
    res.json(person)
})
// incomplete
router.get("/person/:person_id/movie_credits", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person = await Person.find({_id: person_id})
    res.json(person)
})
router.get("/person/:person_id/images", async(req,res,next)=> {
    const person_id = req.params.person_id
    const person = await Person.find({_id: person_id})
    res.json({
        images: person.profileImage
    })
})

module.exports = router

