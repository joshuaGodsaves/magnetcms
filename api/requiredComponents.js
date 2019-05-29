var accessProduct = require('../data/index').accessProduct
var accessCategory = require('../data/index').accessCategory
var accessBlog = require('../data/index').accessBlog
var accessSection = require('../data/index').accessSection

async function init(){
    let product =await accessProduct
    let catgory=await accessCategory
    let blog=await accessBlog
    let section=await accessSection

    return {
        productBucket: product,
        categoryBucket: catgory,
        blogBucket: blog,
        sectionBucket: section
    }

}
