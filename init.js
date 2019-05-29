//get store id and set up store requirement
let mongoose = require("mongoose")
let storeModel= require("./data/models/store").model

let storeId= "5cbdb23591e1923db8cd57da"

exports.init= async function (cb){
    let result= await storeModel.findOne({_id: mongoose.Types.ObjectId(storeId)}).lean().exec()
    result.themes.forEach(v=>{
        if(v.active == true){
            //Write theme here into store
        }
    })

    cb(result)
    return  result

}