var ProfileVm = require('./profile-view-model');
var FrameModule = require("ui/frame");
var dialog = require("ui/dialogs");


var profile = new ProfileVm();

exports.loaded = function(args){
    var page = args.object;
    page.bindingContext = profile;
}

exports.onLogout = function(){
    dialog.confirm({
        title: "Exit",
        message: "Are you sure, you want to exit?",
        okButtonText: "OK",
        cancelButtonText: "Cancel"
    }).then(function(result){
        console.log("Dialog results: " + result);

        if(result){
            FrameModule.topmost().navigate({
                moduleName: "views/login/login",
                clearHistory: true
            })
        }
    })
}

exports.onRepos = function(){
    FrameModule.topmost().navigate({
                moduleName: "views/repos/repos"
            })
}