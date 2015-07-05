var axios = require('axios');

function getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos');
}

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username);
}
//
////promise logic simple example
//var promiseObj = getRepos('dtsao');
//promiseObj.then(function (data) {
//    //this callback function is called once data has been returned from the getRepos api call
//    console.log(data);
//});


var helpers = {
    getGithubInfo: function (username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(function (arr) {
                //callback is called once all promises have been resolved
                return {
                    repos: arr[0].data,
                    bio: arr[1].data
                }
            });
    }
};

module.exports = helpers;