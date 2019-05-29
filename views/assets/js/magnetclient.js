// Add to cart
// Get cart
// Delete Cart
// Edit Cart

function Client(storeId) {
    async function  get(url){
        let res= await fetch(url)
        let data= await res.json()
        return data
    }

    console.log("about to load client api")
    let header = new Headers()

    this.sid = storeId
    this.postItemInCart = function () {

    }
    this.putItemInCart = function () {

    }
    this.deleteItemInCart = function () {

    }
    this.makePurchase = function () {

    }
    this.getProducts = async function () {
        let data=await get(`http://localhost:5000/api/store/${storeId}`)

    }
    this.getProduct = function () {

    }
    this.getArticles = function () {

    }

    this.getCategories = function () {

    }
    this.loginUser = function (email, password) {

    }
    this.createUser= function (email, userName, password, ...data){

    }
    this.logOutUser = function () {

    }
    return this
}