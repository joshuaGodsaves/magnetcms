var express = require('express');
var router = express.Router();
var axios = require('axios')
var userModel= require("../data/models/user").model
var accessCustomers= require("../data/index").accessCustomers

/* GET users listing. */
router.get('/',async  function(req, res, next) {
  res.json('respond with a resource');
});

router.get('/signin',async  function(req, res, next) {
  res.render('signin')
});

router.get('/signup',async  function(req, res, next) {
  res.render('signup')
});

router.post('/signup',async  function(req, res, next) {

  let result = undefined
  if(req.body.email){
    let result= await  axios.post("http://localhost:5000/register", req.body)
    if(result && result.data.token){
      axios.post(`http://localhost:5000/api/store/${"5ce4697ccad6b823fceec81c"}/customer`, {customer: result.data.user})

      res.json({completed: true, message: "user signed up to magnet add added as a customer to this store"})
      return
    }else{
      res.json({completed: false, message: "user signed up to magnet add added as a customer to this store"})
    }

  }
  if(req.body.customer){
    axios.post(`http://localhost:5000/api/store/${"5ce4697ccad6b823fceec81c"}/customer`, {customer: req.body.customer})
    res.render({completed: true, message: "user signed up to magnet add added as a customer to this store"})
  }
});

router.post('/login',async  function(req, res, next) {
  let email= req.body.email
  let password= req.body.password
  // Log user in
  let user= await userModel.findOne({
    _id: email, password: password
  }).exec()
  if(user){

    let customer= await accessCustomers.findItemByPropVal("customer", email)
    if(customer){
      // Log user in  proper.
      res.json({complete: true, error: false, data:{customer: customer}})
    }

  }else{
    console.log('user not a member of magnet')
    res.send("")
  }

});
router.post('/logout',async  function(req, res, next) {
  //Cancel session created

});



module.exports = router;
