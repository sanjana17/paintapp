var app = angular.module('PaintApp',['ngMaterial','ngAnimate', 'app.paint.controller'])
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