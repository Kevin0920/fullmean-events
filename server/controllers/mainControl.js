var mongoose = require('mongoose');
var path = require("path");

var User = mongoose.model("User");
var Event = mongoose.model("Event");
var Comment = mongoose.model("Comment");

module.exports = {
    register: function(req, res) {
        console.log("from controller register: ", req.body);
        User.findOne({email: req.body.email}, function(err, user) {
          console.log("from controller reg user: ", user);
          if (err) {
            console.log("register error from controller ");
          }
          else {
            if (user === null) {
              var user = new User({first_name: req.body.first_name, last_name: req.body.last_name, state: req.body.state, email: req.body.email, password: req.body.password});
              user.save(function(err, user) {
                if (err) {
                  console.log("from controller reg: ", err);
                }
                else {
                  res.json({success:"success", user:user});
                }
              })
            }
          }
        })
      },
      
      login: function(req, res) {
        console.log(req.body);
        console.log("from controller login: ", req.body.email);
        User.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
          if (err) {
            console.log("can't find this user email from controller", err);
          } 
          else {
            if (user === null) {
              res.json({message:"can't find this email", user: null}); 
            }
            else {
              if(user.password === req.body.password) {
                res.json({message:"success", user:user});
              }
              else {
                res.json({message:"The password is incorrect", user:null});
              }
            }
          }
        })
      },

      update: function(req, res) {
        // console.log("b-e update", req.params.id);
        User.findOne({_id: req.params.id}, function(err, data) {
          if (err) {
            console.log("can't find update user", err);
          }
          else {
            data.first_name = req.body.first_name;
            data.last_name = req.body.last_name;
            data.email = req.body.email;
            data.location = req.body.location;
            data.save(function(err) {
              if (err) {
                console.log("can't update user", err);
              }
              else {
                console.log(data);
                res.json({data:data});
              }
            })
          }
        })
      },
      


 }