var star = angular.module('star', []);

star.controller('ratingCtrl', ['$scope',
	function ($scope) {
		$scope.max = 10;
		$scope.isReadonly = true;
	}]);