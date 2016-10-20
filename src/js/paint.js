var module = angular.module('app.paint.controller',[]);

	module.$inject = ['$scope'];
	module.controller('paintController',function($scope){
		$scope.showFlip = [];
		$scope.flip = function(img){
			debugger;
			var time = new Date();
			$scope.time = time;
			$scope.showFlip[img.id] = true;
		}
		$scope.images =[
			{"id" : 'src/resources/1.jpg',"price": 100},
			{"id" : 'src/resources/2.jpg',"price" : 110},
			{"id" : 'src/resources/3.jpg',"price" :210},
			{"id" : 'src/resources/4.jpg', "price" : 310},
			{"id" : 'src/resources/5.jpg', "price" : 410},
			{"id" : 'src/resources/6.jpg', "price" : 510}
		]
		$scope.flipOnce = function(img){
			$scope.showFlip[img.id] = false;	
		}
	});
