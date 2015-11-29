var masonTest = angular.module('masonTest', []);

masonTest.controller('testController', function(){
	this.cars = [{'name':"car1"},{'name':"car2"},{'name':"car3"}];
});
