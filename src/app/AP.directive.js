(function(){

'use strict'

angular.module('2').directive('ap', function(){

return{

scope:{
	person:'=person'
},

template:'<div class="well">'+
		'<p class="text-center"><span class="glyphicon glyphicon-user"></span></p>'+
		'<h4>{{person.firstName}} {{person.lastName}}</h4>'+
		'<p class="text-success" ng-hide="person.will!=1">Will be there</p>'+
		"<p class='text-danger' ng-hide='person.will==1'>Won't be there</p>"+
		'<p class="text-muted">{{person.email}}</p>'+
    	'</div>'


// template:'<div class="well">'+
// 		'<p class="text-center"><span class="glyphicon glyphicon-user"></span></p>'+
// 		'<h4>{{person.firstName}} {{person.lastName}}</h4>'+
// 		'<p class="text-success" ng-hide="person.will!=true">Will be there</p>'+
// 		"<p class='text-danger' ng-hide='person.will===true'>Won't be there</p>"+
// 		'<p class="text-muted">{{person.email}}</p>'+
//     	'</div>'
}

	

});
})()