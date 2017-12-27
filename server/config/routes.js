var mainroutes = require('../controllers/mainControl.js');
var path = require('path');


module.exports = function(app){
    app.post('/register', function(req, res) {
        mainroutes.register(req, res);
      })
    
    app.post('/login', function(req, res) {
       mainroutes.login(req, res);
    })

    app.put('/user/edit/:id', (req, res, next)=>{
       mainroutes.update(req, res);
    })

    app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})

 }