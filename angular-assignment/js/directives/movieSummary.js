movieApp.directive('movieSummary', function() {
    return {
        restrict: 'E',
        scope: {
          data: '=',
          number: '&'  
        },
        templateUrl: 'views/movies/templates/movieSummary.html'     
    }
});