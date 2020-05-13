// importing axios to do GET request on external website basically AJax for server side
var db = require("../models")

var axios = require("axios")

var cheerio = require("cheerio")

function apiRoutes(app){
    app.get("/scrape", (req, res) => {
        
        // dot 'then' is promise that i will wait for you until I start working
        axios.get("https://www.motortrend.com/auto-news/").then(function(results){
        //  .remove is used to make sure duplicate  
        db.Article.remove().then(function(result){
            var $ = cheerio.load(results.data)
            //   scraping article using cheerio with the article class name block.post and inside that you have children that have the image, title, link, summary
                 $("article.block-post").each(function(i,element){
                       var image = $(this).children("a").children("img").attr("data-src")
                       var title = $(this).children("a").attr("title")
                       var link = $(this).children("div.block-post-summary").children("a.block-post-title").attr("href")
                       var summary = $(this).children("div.block-post-summary").children("div.block-post-excerpt").text()
    
                       console.log(image)
                       console.log(title)
                       console.log(link)
                       console.log(summary)
                      
                       db.Article.create({
                           title:title,
                           summary:summary,
                           link:link,
                           image:image
    
                        
                       })
    
    
                 })
         
                  res.send("scrape completed")
         
        })
        //   $ is part of cheerio to scrap or steal information without paying from external website
    
        })
      
    });


    app.get("/", (req, res) => {
      db.Article.find({saved:false}).then(function(results){
          var newResults = [] 
          for (let index = 0; index < results.length; index++) {
             
              newResults.push({
                  title: results[index].title,
                  summary:results[index].summary,
                  link:results[index].link,
                  image:results[index].image,
                  _id:results[index]._id
              })
          }
          res.render("index", {articles:newResults})
      })
    });

    app.put("/api/articles/:id", function(req,res){
       var id = req.params.id

       db.Article.update({_id:id}, {saved:true}).then(function(results){
           res.json(results)
       })
    })
}

module.exports = apiRoutes