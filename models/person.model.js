const mongoose = require("mongoose")
const persomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    biography: String,
    birthDate: Date,
    deathaDate: Date,
    gender: {
        type: String,
        enum: ['MALE','FEMALE','OTHERS']
    },
    profileImage: String,
    movieCredits: [
        {
            movie: {
                type: mongoose.Types.ObjectId,
                ref: "Movie"
            },
            character: String,
            job: String
        }
    ]
});
const Person = mongoose.model("Person",persomSchema)
module.exports = Person