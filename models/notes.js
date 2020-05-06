var mongoose = require("mongoose")

var Schema = mongoose.Schema

var noteSchema = new Schema({
    title: {
        type: {
            String
        }
    },
    body: {
        type: {
            String
        }
    }
})

var Note = mongoose.model("Note", noteSchema)
module.exports = note