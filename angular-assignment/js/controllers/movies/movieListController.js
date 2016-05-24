movieApp.controller('movieListController', function($scope, movieService) {
  $scope.movieList = movieService.list;
});