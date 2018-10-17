(function(){
	'use strict'
	 angular.module("nameCalculator",[])
	 .controller("nameCalculatorController",function($scope){
	 	//following are properties of controller or the properties of controller(controls the data) is defined with $scope variable.

		$scope.name="";
		$scope.totalValue=0;
		$scope.displayNumeric=function()
		{
			var totalNameValue=calculateNumeric($scope.name);
			$scope.totalValue=totalNameValue;

		}
		function calculateNumeric(string)
		{
			var total=0;
			for(var i=0;i<string.length;i++)
			{
				total+=string.charCodeAt(i);
			}
			return total;
		}

	});
})();
//imp. points
//1.controller controls the data
//2.datas controlled by the controller are used with $scope
//3.and datas declared with $scope is binded to input field using ng-model