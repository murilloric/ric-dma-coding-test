MASTERAPP.controller('homeCtrl', ['$scope', 'ricsAPI', function ($scope, ricsAPI) {
	///sort and order movies
	$scope.sort_property = 'title'
	$scope.sort_order = false

	//search 
	$scope.search = {movie_title:''}

	//load movie data
	ricsAPI.searchForMovies('all', function(resp){
		$scope.movie_data = resp;
	});

}]);
