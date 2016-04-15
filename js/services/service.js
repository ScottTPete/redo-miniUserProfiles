angular.module('userProfiles')
	.service('mainSvc', function($http) {

			
		//gets data from json file using $http get, then promises to get data and return that data
		this.getUsers = function () {
			return $http.get('data.json').then(function(response) {
				return response.data;
			})
		}
		
			 
		





	});