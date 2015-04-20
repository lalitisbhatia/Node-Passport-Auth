commonApp.factory('utilityService', function($log,$filter,$q,$location ){
  var service = {

    getGreeting: function () {
      var hour = new Date().getHours();
      if (hour < 12) {
        hour = "morning"
      }
      else if (hour >= 12 && hour < 17) {
        hour = "afternoon"
      }
      else if (hour >= 17) {
        hour = "evening"
      }
      return hour;
    },
    getPastNYears: function (N) {
      var currentYear = (new Date()).getFullYear();
      var years = [];
      for (var i = 0; i < N; i++) {
        years.push(currentYear - i);
      }
      return years;
    },

    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    weekDaysAdapter: function (day, type) {
      if (type === 'get') {
        if (day === 7) {
          return 0;
        }
      } else {
        if (day === 0) {
          return 7;
        }
      }
      return day;
    }
  };


  return service;
});

