var userVm = require("./login-view-model");
var ConfigModule = require("../../shared/config");
var FrameModule = require("ui/frame");

var page, username, password;

var user = new userVm();
exports.loaded= function(args){
    page = args.object;
    page.bindingContext = user;

}

exports.signIn = function(){
   user.signIn()
   .catch(function(error){
       alert(error)
   }).then(function(response){
       ConfigModule.setuserData(response);
       console.log("Connected");

       FrameModule.topmost().navigate({
           moduleName: "views/profile/profile",
           clearHistory: true 
       })
   })

}