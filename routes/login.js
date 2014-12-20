var express = require('express');
var router = express.Router();

var loginService = require('../services/login');

router.get('/:user_name', function(req, res) {
    
    var userName = req.params.user_name;
    var pass = req.query.pass;
    
    loginService.login(userName, pass, function(error, result) {
       
        if (error) {
            res.status(401).json(result);
        } else {
            res.status(200).json(result);
        }
        
    });
    
});




module.exports = router;
