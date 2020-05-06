// creating server  and Url path 
var express = require("express")

var app = express()

// creating port
var port = process.env.PORT || 8000

// initalizing the handlebars setup
var expressHandleBars = require("express-handlebars")
app.engine("handlebars", expressHandleBars({defaultLayout:"main" }))

// setting the view engine to handlebars
app.set("view engine", "handlebars")

// creating public folder as the URL localhost path
app.use(express.static("public"))

// creating middleware parsing 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

var apiRoutes = require("./routes/apiroutes")
var mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scraperdb")

// creating server via app.listen 
app.use(PORT,function(){
    console.log("App Is Listening http://localhost:" + PORT)
})


