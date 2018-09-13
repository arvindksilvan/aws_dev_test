
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

$(document).ready( function () {
    $('#table_id').DataTable({
		"processing": true,
        "ajax": {
			url: '/users',
			type: 'GET',
			dataSrc:""
			},
        "columns": [
        { data: 'id' },
        { data: 'name' },
        { data: 'age' },
        { data: 'salary' },
    ]
    } );
});