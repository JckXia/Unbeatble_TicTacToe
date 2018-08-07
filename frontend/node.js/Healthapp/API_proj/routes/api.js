//var bcrypt=require('bcrypt');
const express = require ('express');
 //var passwordHash=require('password-hash');
const router = express.Router();
var passwordHash = require('password-hash');
const Ninja = require('../models/ninja');
var MongoClient = require('mongodb').MongoClient;



// get a list of ninjas from the db

router.get('/ninjas', function(req, res){

     //Url parameters to request specific ones
     //URL params
     //www.google.com/api/ninjas?ing=50.45&lat=42.23
     //console.log(res.body);

   console.log(req.query);
   Ninja.find(req.query,function(err,user){
      if(err) throw err;
       if(user){

         res.send(user);
       }
   });

   //res.send({a:1});
   //console.log("Testing");
//    res.send({type: 'GET'});

})   ;


router.post('/ninjas/login',function(req,res){


 
  Ninja.findOne({name:req.body.name},function(err,user){
          if(err) throw err;
          if(user){
             //User exists, proceed to perform password authentication
               //Find user password's hash
               //console.log(req.body.password);
               if(passwordHash.verify(req.body.password,user.password)){
                 res.json({success:1});
               } else{
                 res.json({success:0});
               }

          }else{
    //User does not exist, return to frontend the information that user DNE
            res.json({success:0});
          }
  })  ;

});

// add a new ninja to the db

//If function fails, it goes on to the next piece of middleware
router.post('/ninjas/register', function(req, res){
    // console.log("exist")
    //The below function finds if the user exists in the database

  Ninja.findOne({name:req.body.name},function(err,user){
          if(err) throw err;
          if(user){
            console.log("exist");
            res.send({success:0});

          } else{
            console.log("negative");

        req.body.password=passwordHash.generate(req.body.password);
        console.log(req.body.password);
            //  console.log("password "+req.body.password);
              Ninja.create(req.body).then(function(ninja){
                  // console.log(req.body.rank);
                           res.json(ninja);

              });

          }
      });


});



// update a ninja in the db

router.put('/ninjas/:id', function(req, res, next){

    Ninja.findOneAndUpdate({name: req.params.id}, req.body.age).then(function(){

        Ninja.findOne({name: req.params.id}).then(function(ninja){

            res.send(ninja);

        });

    }).catch(next);

});

//


//Handling delete requests
router.delete('/ninjas/:id', function(req, res){

    Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
      res.send(ninja);
    });
  //  res.send({type: 'DELETE'});

});



module.exports = router;
