var appController = angular.module("appControllers", []);

appController.controller("homeViewCtrl", ["$scope", function($scope){
	$scope.message = "Hi";
	$scope.displayButton = false;
	$scope.onMessage = function(){
		alert('call!');
	}
}]);

appController.controller("aboutViewCtrl", ["$scope", function($scope){
	
}]);

appController.controller("contactViewCtrl", ["$scope", function($scope){
	
}]);

appController.controller("registerCtrl", ["$scope", function($scope){
	$scope.user = "User 1";
	$scope.email = "user@test.com"
}]);	

var studentsList = [];
appController.controller("studentCtrl", ["$scope", "$http", function($scope, $http){
	if(studentsList.length == 0){
		$http.get("data/data.json")
		.success(function(result){
			$scope.students = result.student;
			studentsList = $scope.students;
		})
		.error(function(err){
			alert("Unable to load student data list. Please try again.")
		});
	}
	else{
		$scope.students = studentsList;
	}
	
	// save new student records
	$scope.onSave = function(){
		var obj = {};
		obj.studentId = $("#txtStudentId").val();
		obj.name = $("#txtName").val();
		obj.address = $("#txtAddress").val();
		obj.courses = $("#txtCourses").val().split(";");
		studentsList.push(obj);
		$scope.students = studentsList;

		$("#txtStudentId").val("");
		$("#txtName").val("");
		$("#txtAddress").val("");
		$("#txtCourses").val("");
	}
}]);

appController.controller("studentDetailCtrl", ["$scope", "$routeParams", function($scope, $routeParams){
	
	for(var i = 0; i < studentsList.length; i++){
		if(studentsList[i].studentId == $routeParams.studentId){
			$scope.student = studentsList[i];
			break;
		}
	}

}]);