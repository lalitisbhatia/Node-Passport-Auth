var env = process.env.NODE_ENV;
console.log('the node env is ' + env);
var urlLocal = "mongodb://localhost:27017/test";
var urlRemote = "your remote mongo url"
var url = env=='test'?urlLocal:urlRemote;
module.exports = {
    url: url
};