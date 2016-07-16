MASTERAPP.factory('ricsAPI', ['$http', '$state', '$cookies', '$ionicPopup', function($http, $state, $cookies, $ionicPopup){
	var service = {}

	service.accessPassport = function(callBack){
		var config = {headers: {'X-Ric-Master-App': 'Come on in!'}}
		var url = '/access/passport';
		$http.get(url, config).success(function(resp){
			callBack(resp);
		}).error(function(resp){
			$state.go('access_request')
			return
		});
	}

	service.accessRequest = function(data, callBack){
		var config = {headers: {'X-Ric-Master-App': 'Come on in!'}}
		var url = '/access/request';
		var payload = data;

		console.log(data)

		$http.post(url, payload, config).success(function(resp){
			callBack(resp);
		}).error(function(resp){
			console.log(resp);
		});
	}

	service.accessVerify = function(data, callBack){
		var config = {headers: {'X-Ric-Master-App': 'Come on in!'}}
		var url = '/access/verify';
		var payload = data;

		$http.post(url, payload, config).success(function(resp){
			callBack(resp);
		}).error(function(resp){
			console.log(resp);
			callBack(resp)
		});
	}

	service.showAlert = function(msg, callBack) {
		console.log('showAlert')
	    var alertPopup = $ionicPopup.alert({
	    	title: 'App Message',
	    	template: msg
	   	});
	   	alertPopup.then(function(res) {
	   		callBack(res);
	   	});
	};

	return service

}]);