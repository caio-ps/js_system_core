var login = function(userName, pass, _callback) {
    
    if (!userName || !pass) {
        console.log(userName);
        console.log(pass);
        _callback("Unauthorized", {message: "Usuário e senha obrigatórios"});   
    }
    
    //teste
    if (userName === "caio" && pass == "caio") {
        _callback(undefined, {message: "Login OK"}); 
    } else {
        _callback("Unauthorized", {message: "Usuário ou senha inválidos"});
    }
    
}

module.exports.login = login;