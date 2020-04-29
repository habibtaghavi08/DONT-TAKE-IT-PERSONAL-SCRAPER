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

// import the burger controller file
var burger_controller = require("./controllers/burger_controller")

// creating server via app.listen 
app.use(PORT,function(){
    console.log("App Is Listening http://localhost:" + PORT)
})


