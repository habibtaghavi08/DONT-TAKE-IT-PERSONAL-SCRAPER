// creating server  and Url path 
var express = require("express")

var app = express()

// creating port
var PORT = process.env.PORT || 8000

// initalizing the handlebars setup
var expressHandleBars = require("express-handlebars")
app.engine("handlebars", expressHandleBars({defaultLayout:"main" }))

// setting the view engine to handlebars without can not view handlebars
app.set("view engine", "handlebars")

// creating public folder as the URL localhost path
app.use(express.static("public"))

// creating middleware parsing 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var apiRoutes = require("./routes/apiroutes")

apiRoutes(app)
var mongoose = require("mongoose")
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperdb"
mongoose.connect(MONGODB_URI)
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scraperdb")



// creating server via app.listen 
app.listen(PORT, function(){
    console.log("App Is Listening http://localhost:" + PORT)
})


