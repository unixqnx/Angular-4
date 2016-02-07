(function(){

'use strict'	

	angular.module('2').service('sharedData', function(){

		var person=[];

		this.setPerson = function(per){
			person.push(per);
		}

		this.getPerson = function(){
			return person;
		}
	});
})();




