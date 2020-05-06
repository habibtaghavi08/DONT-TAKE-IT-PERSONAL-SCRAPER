// importing axios to do GET request on external website basically AJax for server side
var db = require("../models")

var axios = require("axios")

var cheerio = require("cheerio")

function apiRoutes(app){
    app.get("/scrape", (req, res) => {
        
        // dot 'then' is promise that i will wait for you until I start working
        axios.get("https://www.motortrend.com/auto-news/").then(function(results){
        //   $ is part of cheerio to scrap or steal information without paying from external website
        var $ = cheerio.load(results.data)
        console.log($)
        })
      
    });
}

module.exports = apiRoutes