(function(){

'use strict'

angular.module('2').controller('apCtrl', function($scope, $state, sharedData){

$scope.testValue = [];//[new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', '1'),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', '2')];

$scope.testValue = $scope.testValue.concat(sharedData.getPerson());


$scope.currentUser = new person();

$scope.signupForm = function()
{ 
	sharedData.setPerson($scope.currentUser);
	$scope.Navigate('home'); 
};

$scope.Navigate = function(nav)
{ 
	$state.go(nav); 
};



$scope.bring = false;

})

})();