MASTERAPP.controller('homeCtrl', ['$scope', 'ricsAPI', function ($scope, ricsAPI) {
	$scope.sort_property = 'title'
	$scope.sortBy = function(){
		console.log('yes')
	}

	ricsAPI.searchForMovies(function(resp){
		console.log(resp)
		$scope.movie_data = resp

	})



	// init();
}]);
