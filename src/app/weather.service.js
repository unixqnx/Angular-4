(function(){

'use strict'

angular.module('2').service('weatherService', function($http){

	this.getWeather = function(){

		var promis = $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98').then(function(response) {return response.data;});
		return promis;

	}
});
})();
















