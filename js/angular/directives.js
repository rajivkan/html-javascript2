var appDirective = angular.module("appDirectives", []);

appDirective.directive("login", [function(){
	return {
		restrict: "C", // E, A, C
		templateUrl: "components/login.html"
	}
}]);