module.exports = function () {
    var apiEndpoint = 'https://api.github.com/user';
    var credentials = "";
    var userData = {};
    var reposUrl = "https://api.github.com/users/{username}/repos";
    var repos = [];

    function getApiEndpoint() {
        return apiEndpont;
    }

    function getCredentials() {
        return credentials;
    }

    function setCredentials(input) {
        credentials = input;
    }

    function getuserData() {
        return JSON.parse(userData);
    }

    function setuserData(input) {
        userData = input.content;
    }

    function setRepos(input){
        repos = input
    }

    function getRepos(){
        return JSON.parse(repos);
    }

    return {
        apiEndpoint: apiEndpoint,
        getCredentials: getCredentials,
        setCredentials: setCredentials,
        getuserData: getuserData,
        setuserData: setuserData,
        reposUrl:reposUrl,
        setRepos:setRepos,
        getRepos:getRepos
    };
}();
