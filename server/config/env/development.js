
module.exports = {
    db: "mongodb://localhost:27001/development",
    openIdAuth : {
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
    }

};