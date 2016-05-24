movieApp.service('languageService', function($http) {
   return {
       getAllLanguages: function(callback) {
           $http.get('resources/all-languages.json').success(function(data) {
               callback(data);
           });
       }
   } 
});