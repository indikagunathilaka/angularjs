movieApp.controller('movieDetailsController', function($scope, $routeParams) {
  $scope.getMovieById($routeParams.id);
});