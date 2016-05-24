movieApp.directive('uniqueCharacterName', ['movieService', function(movieService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      element.bind('blur', function(e) {
        if (!ngModel || !element.val()) return;
        var keyProperty = scope.$eval(attrs.uniqueCharacterName);
        var currentValue = element.val();
        
        var unique = movieService.checkUniqueCharacterName(keyProperty, currentValue);
        ngModel.$setValidity('unique', unique);
      });
    }
  }
}]);