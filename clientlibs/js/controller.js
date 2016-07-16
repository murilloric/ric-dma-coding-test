MASTERAPP.controller('homeCtrl', ['$scope', 'ricsAPI', function ($scope, ricsAPI) {
	
	ricsAPI.searchForMovies(function(resp){
		console.log(resp)
		$scope.movie_data = resp

	})



	// init();
}]);
