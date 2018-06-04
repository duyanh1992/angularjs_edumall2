var app = angular.module('myApp', ['ngMaterial']);

app.controller('MyController', function($scope, $http, $mdToast){
	$http.get("http://localhost/AJ_Edumall/Angular_CI_ls22/index.php/user/getUserData")
		.then(function(response) {
			$scope.data = response.data;
		});
		
	$scope.editData = function(item){
		item.display = !item.display;
			
		console.log(item);	
		var data = $.param({
			id : item.id,
			name : item.name,
			facebook : item.facebook,
			year : item.year_of_birth,
			phone : item.phone_number
		});
		
		var config = {
			headers : {
				'content-type' : 'application/x-www-form-urlencoded;charset=UTF-8'
			}
		}
			
		$http.post('http://localhost/AJ_Edumall/Angular_CI_ls22/index.php/user/editUser', data, config)
		.then(function(res){
			$scope.showSimpleToast();
			console.log(res);
		}, function(res){
			console.log(res);
		});
	};
		
	// $scope.data = [
		// {
			// name : 'Duy Anh',
			// year : 1992,
			// club : 'L14'
		// },
		// {
			// name : 'Rooney',
			// year : 1986,
			// club : 'Everton'
		// },
		// {
			// name : 'Carrick',
			// year : 1982,
			// club : 'Mu'
		// },
	// ];

	//$scope.display = true;

	$scope.changeDisplay = function(item){
		item.display = !item.display;
	};
	
	// Toast material
	
	var last = {
      bottom: true,
      top: false,
      left: true,
      right: false
    };

  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
	sanitizePosition();

	return Object.keys($scope.toastPosition)
	  .filter(function(pos) { return $scope.toastPosition[pos]; })
	  .join(' ');
  };

  function sanitizePosition() {
	var current = $scope.toastPosition;

	if ( current.bottom && last.top ) current.top = false;
	if ( current.top && last.bottom ) current.bottom = false;
	if ( current.right && last.left ) current.left = false;
	if ( current.left && last.right ) current.right = false;

	last = angular.extend({},current);
  }

  $scope.showSimpleToast = function() {
	var pinTo = $scope.getToastPosition();

	$mdToast.show(
	  $mdToast.simple()
		.textContent('Cập nhật thành công!')
		.position(pinTo )
		.hideDelay(3000)
	);
  };

  $scope.showActionToast = function() {
	var pinTo = $scope.getToastPosition();
	var toast = $mdToast.simple()
	  .textContent('Marked as read')
	  .action('UNDO')
	  .highlightAction(true)
	  .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
	  .position(pinTo);

	$mdToast.show(toast).then(function(response) {
	  if ( response == 'ok' ) {
		alert('You clicked the \'UNDO\' action.');
	  }
	});
  };
  
  //End Toast material
});

// .controller('ToastCtrl', function($scope, $mdToast) {
  // $scope.closeToast = function() {
    // $mdToast.hide();
  // };
// });