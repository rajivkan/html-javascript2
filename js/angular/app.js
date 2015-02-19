var appSample = angular.module("appSample", ["ngRoute", "appControllers", "appDirectives"]);
appSample.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'template/home.html',
                controller: 'homeViewCtrl'
            })
            .when('/about', {
                templateUrl: 'template/about.html',
                controller: 'aboutViewCtrl'
            })
            .when('/contact', {
                templateUrl: 'template/contact.html',
                controller: 'contactViewCtrl'
            })
            .when('/register', {
                templateUrl: 'template/registration.html',
                controller: "registerCtrl"
            })
            .when('/student', {
                templateUrl: 'template/students.html',
                controller: "studentCtrl"
            })
            .when('/student/:studentId', {
                templateUrl: 'template/student-details.html',
                controller: "studentDetailCtrl"
            })
    }
]);