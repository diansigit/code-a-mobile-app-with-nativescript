var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var ConfigModule = require("../../shared/config");
var http = require("http");

var credentials = ConfigModule.getCredentials();
var userData = ConfigModule.getuserData();
var url = (ConfigModule.reposUrl).replace('{username}', userData.login);
var data = new ObservableArray([]);

function Repos(params){
    var viewModel = new Observable({
        reposArray : data
    });

    http.request({
            url: url,
            method: "GET",
            headers: {"Authorization": "Basic " + credentials}
        }).then(function (response) {
              if(response.statusCode === 200){
                data.push(response.content.toJSON());
             }else{
                 throw "Couldn't access the list";
             }
        }, function (e) {
            console.log("Error occured " + e );
        });

        return viewModel;
}

module.exports = Repos; 