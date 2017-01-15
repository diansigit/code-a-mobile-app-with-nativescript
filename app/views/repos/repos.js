var ReposVM = require("./repos-view-model");
var FrameModule = require("ui/frame");
var dialog = require("ui/dialogs");

var repos = new ReposVM();

exports.loaded = function(args) {

    var page = args.object;
    page.bindingContext = repos;

};


exports.onLogout = function(){
    dialog.confirm({
        title: "Exit",
        message: "Are you sure, you want to exit?",
        okButtonText: "Ok",
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


exports.onBackBtn = function() {
    FrameModule.topmost().goBack();
}