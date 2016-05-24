movieApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/movies/dashboard.html'
    }).when('/add', {
        templateUrl: '/views/movies/movieForm.html',
        controller: 'movieController'
    }).when('/list', {
        templateUrl: '/views/movies/movieList.html',
        controller: 'movieListController'
    }).when('/movie/:id', {
        templateUrl: '/views/movies/movieDetails.html',
        controller: 'movieDetailsController'
    }).otherwise({
        redirectTo: '/'
    });
}]);