var module = angular.module('app.paint.controller',[]);

	module.$inject = ['$scope'];
	module.controller('paintController',function($scope){
		$scope.showFlip = false;
		$scope.flip = function(){
			var time = new Date();
			$scope.time = time;
			$scope.showFlip = true;	
		}
		$scope.flipOnce = function(){
			$scope.showFlip = false;	
		}
	});
