let productsModel= require("./models/products")
let categoriesModel= require("./models/categories")
let blogModel= require("./models/blog")
let storeModel= require("./models/store")
let sectionsModel= require("./models/sections")
let customersModel= require("./models/customers")

let genericAccess= require("./access").genericAccessModel

let accessProduct=  genericAccess(productsModel.model, "5cbdb23591e1923db8cd57da").getFilteredItems()
let accessBlog= genericAccess(blogModel.model, "5ce4697ccad6b823fceec81c").getFilteredItems()
let accessSection=  genericAccess(sectionsModel.model, "5ce4697ccad6b823fceec81c").getFilteredItems()
let accessCategory= genericAccess(categoriesModel.model, "5ce4697ccad6b823fceec81c").getFilteredItems()
let accessCustomers= genericAccess(customersModel.model, "5ce4697ccad6b823fceec81c").getFilteredItems()

exports.accessProduct= accessProduct
exports.accessBlog= accessBlog
exports.accessSection= accessSection
exports.accessCategory= accessCategory
exports.accessCustomers= accessCustomers