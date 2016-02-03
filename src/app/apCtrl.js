(function(){

'use strict'

angular.module('2').controller('apCtrl', function($scope){

$scope.testValue = [new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
,new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
,new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)];

$scope.signupForm = function(){}

$scope.currentUser = new person();


})



})();