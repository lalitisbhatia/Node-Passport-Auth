

var openIdAuth = {
    production : {

        'facebookAuth': {
            'clientID': 'your App ID for prod', // your App ID
            'clientSecret': 'your App Secret for prod', // your App Secret
            'callbackURL': 'your app callback url'
        },

        'twitterAuth': {
            'consumerKey': 'twitter  app id for prod',
            'consumerSecret': 'twitter secret for prod',
            'callbackURL': 'twitter callback url for prod'
        },

        'googleAuth': {
            'clientID': 'google app client id for prod',
            'clientSecret': 'google app client secret',
            'callbackURL': 'google app callback url'
        }
    },
    development : {

      'facebookAuth': {
        'clientID': 'your App ID for DEV', // your App ID
        'clientSecret': 'your App Secret for DEV', // your App Secret
        'callbackURL': 'your app callback url'
      },

      'twitterAuth': {
        'consumerKey': 'twitter  app id for DEV',
        'consumerSecret': 'twitter secret for DEV',
        'callbackURL': 'twitter callback url for DEV'
      },

      'googleAuth': {
        'clientID': 'google app client id for DEV',
        'clientSecret': 'google app client secret',
        'callbackURL': 'google app callback url'
      }
    }
};
module.exports = function(env){

    this.getFacebookAuth = function(){
        //console.log('getting auth config for '+env);
        return env=='development'?openIdAuth.development.facebookAuth:openIdAuth.production.facebookAuth;
    };

    this.getTwitterAuth = function(){
        return env=='development'?openIdAuth.development.twitterAuth:openIdAuth.production.twitterAuth;
    };

    this.getGoogleAuth = function(){
        return env=='development'?openIdAuth.development.googleAuth:openIdAuth.production.googleAuth;
    };
};