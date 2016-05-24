movieApp.controller('movieController', function ($scope, movieService, languageService) {
    
    $scope.headerSrc = 'views/header.html';
    $scope.leftMenuSrc = 'views/navBar.html';
    
    languageService.getAllLanguages(function(data) {
      $scope.languages = data;
    });
    
    $scope.only4DigitNumber = /^[12]\d{3}$/;
    $scope.getNumber = function (count) {
       return Array.apply(0, Array(+count)).map(function(value,index){
        return index;
    });
    }
    
    $scope.movies = movieService.list;
    
    $scope.currentMovie = null;
    
    $scope.getMovieById = function(id) {
      var movies = $scope.movies;
      for(var i = 0; i < movies.length; i++) {
        var movie = $scope.movies[i];
        if(movie.id == id) {
          $scope.currentMovie = movie;
        }
      }  
    }
    
    $scope.processMovieCreationForm = function() {
      if($scope.movie.id === undefined) {
        $scope.movie = movieService.add($scope.movie);
      }
    }
    
    $scope.processCharacterCreationForm = function() {
      $scope.movie = movieService.addCharacter($scope.movie, $scope.character);
      $scope.character = {};
    }
});