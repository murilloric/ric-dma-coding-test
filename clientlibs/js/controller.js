MASTERAPP.controller('homeCtrl', ['$scope', 'ricsAPI', function ($scope, ricsAPI) {
	///sort and order movies
	$scope.sort_property = 'title'
	$scope.sort_order = false

	//load movie data
	ricsAPI.searchForMovies(function(resp){
		$scope.movie_data = resp;

	});

}]);
