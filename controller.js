var app = angular.module('myApp', []);

//@controllers
app.controller('mainController', function($scope, $http) {
    $http.get('/users')
    .then(function(response) {
        $scope.users = response.data;
    });
});
app.controller('testController', function($scope, $http) {
	$http.get('/test')
	.then(function(response) {
		$scope.table = response.data;
	});
});
app.controller('submitUserController', function($scope, $http){
	$scope.submitUser = function () {
		var Indata = {name:$scope.userName,age:$scope.userAge,salary:$scope.userSalary};
		var odata = JSON.stringify(Indata);
		$http.post("/addUser", odata).
		then(function (data, status, headers, config) { 
			console.log('success');
		},function (data, status, headers, config) { 
			console.log('error'); 
		});
    }
});
	
$(document).ready( function () {
    $('#tableId').DataTable({
		"processing": true,
        "ajax": {
			url: '/test',
			type: 'GET',
			dataSrc:""
			},
        "columns": [
        { data: 'name' },
        { data: 'age' },
        { data: 'salary' },
    ]
    });
	var t = $('#tableId').DataTable();
	t.row.add({"name":"LOL","age":"ABBB","salary":"SSS"});
});
		