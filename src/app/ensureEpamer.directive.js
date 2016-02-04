(function(){

'use strict'


angular.module('2').directive('ee', function(){

return {

        restrict: 'E',
        scope: {
            val: '='
        },

link : function(scope, ele, attrs, ctrl){


	scope.$watch('val', function(newValue, oldValue){

		alert(newValue);

		});


	// scope.$watch('test', function(){
	// 	 console.log(scope.test);
	// 	});
}
};
});



angular.module('2').directive('tt', function(){

return {

        restrict: 'E',
        scope: {
            val: '='
        },

link : function(scope, ele, attrs, ctrl){


	scope.$watch('val', function(newValue, oldValue){

		alert(newValue.lastName);

		}, true);




	// scope.$watch('val.lastName', function(newValue, oldValue){

	// 	alert(newValue);

	// 	});


	// scope.$watch('test', function(){
	// 	 console.log(scope.test);
	// 	});
}
};
});











})()