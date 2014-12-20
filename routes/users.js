var express = require('express');
var router = express.Router();

var usersService = require('../services/users');

router.get('/', function(req, res) {
    usersService.findList(function(error, usersList){
        
        if(error){
            res.status(500).json(usersList);            
        } else {
            res.status(200).json(usersList);
        }
        
    });  
});

router.get('/:id', function(req, res) {
  res.status(200).json({"name":"Caio com id"});
});

router.post('/', function(req, res) {
  
});

router.put('/:id', function(req, res) {
  
});

router.delete('/:id', function(req, res) {
  res.json({"name":"Caio"});
});


module.exports = router;
