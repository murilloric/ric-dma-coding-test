MASTERAPP.controller('homeCtrl', ['$scope', '$http', 'ricsAPI', function ($scope, $http, ricsAPI) {
	console.log('mainCtrl');
	$scope.user = {"name":"Ric Murillo", "title":"Software Engineer", "location": "Los Angeles"}
	
	function init(){
		// ricsAPI.accessPassport(function(resp){
		// 	console.log("resp", resp);
		// 	$scope.user = resp.data
		// });
	}


	init();
}]);
