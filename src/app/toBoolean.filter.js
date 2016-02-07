(function(){


'use strict'

angular.module('2').filter('toBoolean', function(){
return function(textValue){
	return Boolean(textValue);
};
});
})();
