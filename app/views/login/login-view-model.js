var Observable = require("data/observable").Observable;
var http = require("http");
var base64 = require("../../shared/base64");
var ConfigModule = require("../../shared/config");


function User(info){
    info = info || {};

    var viewModel = new Observable({
        username : info.username || "",
        password : info.password || ""
    });

    viewModel.signIn = function(){
        var credentials = base64.encode(viewModel.get("username") + ":" + viewModel.get("password"));
        ConfigModule.setCredentials(credentials);
        
        return http.request({
            url: ConfigModule.apiEndpoint,
            method: "GET",
            headers: {"Authorization": "Basic " + credentials}
        }).then(function (response){
            if(response.statusCode === 200){
                console.log(JSON.stringify(response));
                return response;
            }else{
                console.log("Bad credentials");
                throw "Bad credentials";
            }
        }, function (e){
            return e;
        })    
    }

    return viewModel;
}

module.exports = User;