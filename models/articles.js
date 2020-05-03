
var mongoose = require("mongoose")

var Schema = mongoose.Schema 

var articlesSchema = new Schema({
    title:{
        type: String
    },
    summary:{
        type:String
    },
    link:{
        type:String
    },
    image:{
        type:String
    },
    notes:
    [{
        type: Schema.Types.ObjectId,
        ref:"Note"
    }
    ]

})

var Article = mongoose.model("Article", articlesSchema)

module.exports = Article