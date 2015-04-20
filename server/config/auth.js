// expose our config directly to our application using module.exports
//module.exports = {
//
//    'facebookAuth' : {
//        'clientID'      : '450960661719417', // your App ID
//        'clientSecret'  : '47f159ab1b40ca9af160a1797b4eeb9a', // your App Secret
//        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
//    },
//
//    'twitterAuth' : {
//        'consumerKey'       : '46H2Ku0cU6lZmBJNinJnnl0IL',
//        'consumerSecret'    : 'heNYEEP4p1W80pl1nRdzgJfz7Dm4j5hU7DWm7l6i5ZOn0lB634',
//        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
//    },
//
//    'googleAuth' : {
//        'clientID'      : '164112971586-1si12tlvjpr2lbahq0416af0190rrqa8.apps.googleusercontent.com',
//        'clientSecret'  : 'e6mY7SlNpBskHGO2dLmquceH',
//        'callbackURL'   : 'http://127.0.0.1:3000/auth/google/callback'
//    }
//
//};


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