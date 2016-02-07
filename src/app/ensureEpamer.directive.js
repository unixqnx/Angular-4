(function(){

'use strict'





// angular.module('2').directive('epamer', function(){

// return {

//         restrict: 'E',
//         // scope: {
//         //     current: '='
//         // },

// 		link : function(scope, ele, attrs, ctrl){

// 		    var userList = 
// 		    [new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
// 			,new person('Nikolay', 'Nikolaev','Nikolay_Nikolaev@epam.com', true),  new person('Petr', 'Petrov','Petr_Petrov@epam.com', false)
// 			,new person('Vasiliy', 'Vasiliev','Vasiliy_Vasiliev@epam.com', true),  new person('Alexandr', 'Alexandrov','Alexandr_Alexandrov@epam.com', false)
// 			,new person('111', '111','111_111@epam.com', true)];

// 			scope.$watch('currentUser', function(newValue){

// 				var valid = false;

// 				for(var index in userList)
// 				{
// 					var item = userList[index];

// 					if(item.firstName == newValue.firstName && item.lastName == newValue.lastName)
// 					{
// 						valid = true;
// 					}
// 				}

// console.log(ctrl);
// 				ctrl.$setValidity('validEpamer', valid);

// 			}, true);
// 		}
// };
// });



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



// angular.module('2').directive('integerS', function() {

// var INTEGER_REGEXP = /^\-?\d+$/;

//   return {
//     require: 'ngModel',
// 	scope:{
// 		val:'=',
// 		mod:'=ngModel'
// 	},

//     link: function(scope, elm, attrs, ctrl) {

// 			scope.$watch('val', function(newValue){

// 			console.log(ctrl);

// 			}, false);
//     }

//   };
// });



// angular.module('2').directive('integerF', function() {

// var INTEGER_REGEXP = /^\-?\d+$/;

//   return {
//     require: 'ngModel',
// 	scope:{
// 		val:'=',
// 		mod:'=ngModel'
// 	},



//     link: function(scope, elm, attrs, ctrl) {

// 			scope.$watch('mod', function(newValue){

// 			console.log(ctrl);

// 			}, false);
//     }

//   };
// });






// angular.module('2').directive('integerT', function() {

// var INTEGER_REGEXP = /^\-?\d+$/;

//   return {
//     require: 'ngModel',




//     link: function(scope, elm, attrs, ctrl) {

// 			scope.$watch(attrs.ngModel, function(newValue){

// 			console.log(ctrl);

// 			}, false);

//     }

//   };
// });






// angular.module('2').directive('integerS', function() {

// var INTEGER_REGEXP = /^\-?\d+$/;

//   return {
//     require: 'ngModel',


//     link: function(scope, elm, attrs, ctrl) {

// 			scope.$watch(attrs.ngModel, function(newValue){

// 			console.log(ctrl);

// 			}, false);

//     }

//   };
// });




	

// angular.module('2').directive('integer', function() {

// var INTEGER_REGEXP = /^\-?\d+$/;

//   return {
//     require: 'ngModel',
//     link: function(scope, elm, attrs, ctrl) {

//       ctrl.$validators.integer = function(modelValue, viewValue) {

// 		console.log(ctrl);


//         if (ctrl.$isEmpty(modelValue)) {
//           // consider empty models to be valid
//           return true;
//         }

//         if (INTEGER_REGEXP.test(viewValue)) {
//           // it is valid
//           return true;
//         }

//         // it is invalid
//         return false;
//       };
//     }
//   };
// });









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // angular.module('2').directive('ngLength', function {
    //     return {
    //         restrict: 'A',
    //         require: 'ngModel',
    //         scope: {
    //             ngLength: '='
    //         }
    //         link: function($scope, $element, $attrs, ngModel) {
    //             $scope.$watch($attrs.ngModel, function(value) {
    //                 var isValid = (value.length === $scope.ngLength);
    //                 ngModel.$setValidity($attrs.ngModel, isValid);
    //             });
    //         }
    //     }
    // }













// angular.module('2').directive('epamer', function(){

// return {

//         restrict: 'E',
//         // scope: {
//         //     current: '='
//         // },

// 		link : function(scope, ele, attrs, ctrl){

// 		    var userList = 
// 		    [new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
// 			,new person('Nikolay', 'Nikolaev','Nikolay_Nikolaev@epam.com', true),  new person('Petr', 'Petrov','Petr_Petrov@epam.com', false)
// 			,new person('Vasiliy', 'Vasiliev','Vasiliy_Vasiliev@epam.com', true),  new person('Alexandr', 'Alexandrov','Alexandr_Alexandrov@epam.com', false)
// 			,new person('111', '111','111_111@epam.com', true)];

// 			scope.$watch('currentUser', function(newValue){

// 				var valid = false;

// 				for(var index in userList)
// 				{
// 					var item = userList[index];

// 					if(item.firstName == newValue.firstName && item.lastName == newValue.lastName)
// 					{
// 						valid = true;
// 					}
// 				}

// console.log(ctrl);
// 				ctrl.$setValidity('validEpamer', valid);

// 			}, true);
// 		}
// };
// });



// angular.module('2').directive('epamer', function(){

// return {

//         restrict: 'E',
//         scope: {
//             current: '='
//         },

// 		link : function(scope, ele, attrs, ctrl){

// 		    var userList = 
// 		    [new person('Dmitriy', 'Sankevich','Dmitriy_Sankevich@epam.com', true),  new person('Ivan', 'Ivanov','Ivan_Ivanov@epam.com', false)
// 			,new person('Nikolay', 'Nikolaev','Nikolay_Nikolaev@epam.com', true),  new person('Petr', 'Petrov','Petr_Petrov@epam.com', false)
// 			,new person('Vasiliy', 'Vasiliev','Vasiliy_Vasiliev@epam.com', true),  new person('Alexandr', 'Alexandrov','Alexandr_Alexandrov@epam.com', false)
// 			,new person('111', '111','111_111@epam.com', true)];

// 			scope.$watch('current', function(newValue){

// 				var valid = false;

// 				for(var index in userList)
// 				{
// 					var item = userList[index];

// 					if(item.firstName == newValue.firstName && item.lastName == newValue.lastName)
// 					{

// 						valid = true;
// 						//alert(newValue.lastName);
// 					}
// 				}

// 				ctrl.$setValidity('validEpamer', valid);

// 			}, true);
// 		}
// };
// });



})()