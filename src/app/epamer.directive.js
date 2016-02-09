(function(){

'use strict'

angular.module('2').directive('epamer', function() {

  return {

 	restrict:'E', 	
    require: 'ngModel',


    link: function(scope, elm, attrs, ctrl) {

		    var userList = 
		    [new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
			,new person('Nikolay', 'Nikolaev','Nikolay_Nikolaev@epam.com', true),  new person('Petr', 'Petrov','Petr_Petrov@epam.com', false)
			,new person('Vasiliy', 'Vasiliev','Vasiliy_Vasiliev@epam.com', true),  new person('Alexandr', 'Alexandrov','Alexandr_Alexandrov@epam.com', false)
			,new person('111', '111','111_111@epam.com', true)];

			scope.$watch(attrs.ngModel, function(newValue){

				var valid = false;

				for(var index in userList)
				{
					var item = userList[index];

					if(item.firstName == newValue.firstName && item.lastName == newValue.lastName)
					{
						valid = true;
					}
				}

				ctrl.$setValidity('validEpamer', valid);

			}, true);
    }

  };
});
})()