// creating selector for mongoose to do CRUD operation 
// way to navigate through all the schemas
// purpose of models is to use pre built CRUD methods in Mongoose also creates Collections
module.exports={
    Article:require("./articles"),
    Note:require("./notes")
}
