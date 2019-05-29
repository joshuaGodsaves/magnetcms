let model = require("./mongoose").mongoose.model

function genericAccessModel(model, id) {
    let obj = {}
    obj.getFilteredItems =async  () => {
      let result= await  model.aggregate([
              {
                  $match: {
                     owner: id
                  }
              },
            {
                $project: {
                    items: {
                        $filter: {
                            input: "$items",
                            as: "item",
                            cond: {
                                $and: [
                                    {$eq: [true, true]}
                                ]
                            }
                        }
                    }
                }
            }
        ]).exec()
        return result[0]
    }
    obj.findItemById= async (id)=>{
        let result = await model.findOne({owner: id}).exec()
        let item= result.items.id(id)
        return item
    }
    obj.findItemByPropVal= async (key, value)=>{
        let result = await model.findOne({owner: id}).exec()
        let found= undefined;
        result.items.forEach(item=>{
            if(item[key]== value){
                found= item
            }
        })
        return found
    }
    return obj
}
exports.genericAccessModel= genericAccessModel