var Observable = require("data/observable").Observable;
var ConfigModule = require("../../shared/config");


var userData = ConfigModule.getuserData();

function Profile() {
    var viewModel = new Observable({
        avatar : userData.avatar_url || "",
        fullname : userData.name || "",
        login: userData.login || ""
    });

    return viewModel;
}

module.exports = Profile;  