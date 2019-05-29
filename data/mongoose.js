let mongoose = require('mongoose')


let connectionString="mongodb://localhost:27017/ecommerce"

mongoose.connect(connectionString)

mongoose.connection.on("open", function(){
    console.log("connected to mongodb")
})

mongoose.connection.on("error", function(){
    console.log("could not connect")

})


exports.mongoose = mongoose