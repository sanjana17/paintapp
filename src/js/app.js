angular.module('PaintApp',['ngMaterial','ngAnimate', 'app.paint.controller', 'ngRoute'])
.config(['$routeProvider','$locationProvider',
         function($routeProvider, $locationProvider) {
             $routeProvider
                 .when('/payment', {
                     path: "/payment",
                     templateUrl:"templates/payment.html",
                     controller:'payController'
                 });
                 
             }])
 .directive('myPicture', function() {
  return {
    template: '<img src="./src/resources/3.jpg" style="width:25rem;height:25rem;"/>'
  };
})
 .directive('paintHeader', function() {
  return {
    template: './src/templates/paintheader.html'
  };
});