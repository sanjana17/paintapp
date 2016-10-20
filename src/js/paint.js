var module = angular.module('app.paint.controller',[]);

	module.$inject = ['$scope'];
	module.controller('paintController',function($scope){
		
		$scope.flip = function(img){
			debugger;
			var time = new Date();
			$scope.time = time;
			$scope.showFlip[img.id] = true;	
		}
		$scope.images =[
			{"id" : 'src/resources/1.jpg',"index": 0},
			{"id" : 'src/resources/2.jpg',"index" : 1},
			{"id" : 'src/resources/3.jpg',"index" :2},
			{"id" : 'src/resources/4.jpg', "index" : 3},
		]
		$scope.flipOnce = function(){
			$scope.showFlip = false;	
		}
	});
