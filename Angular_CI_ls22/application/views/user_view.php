<html>
<meta charset='utf-8'>
<head>
	<link rel="stylesheet" href="<?php echo base_url(); ?>frontend/vendor/css/bootstrap.css" />
	<link rel="stylesheet" href="<?php echo base_url(); ?>frontend/vendor/css/angular-material.min.css">
	<!-- <link rel="stylesheet" href="vendor/fontawesome.min.css" /> -->
	<style type="text/css">
		
	</style>
</head>
<body ng-app="myApp" ng-controller="MyController">
	<div class="container">
		<div class="card" ng-repeat = "item in data" ng-init="item.display=true">
			<div ng-show="item.display">
				<div class="card-header">
					<b class="float-xs-right" ng-click="changeDisplay(item);"><i class="fas fa-pencil-alt"></i></b>
					<b>Tên : </b><i>{{item.name}}</i><br />
				</div>
				<div class="card-body">
					<div>
					<b>Facebook : </b><i>{{item.facebook}}</i><br />
					<b>Năm sinh: </b><i>{{item.year_of_birth}}</i><br />
					<b>Phone: </b><i>{{item.phone_number}}</i><br />
					</div>
				</div>
			</div>

			<div ng-show="!item.display">
				<div class="card-header">
					<b class="float-xs-right" ng-click="editData(item);"><a href="" class="btn btn-outline-danger">Save</a></b>
					<b>Tên : </b><input type="text" name="txtName" ng-model="item.name"/><br />
				</div>
				<div class="card-body">
					<div>
						<input type="hidden" name="facebook" ng-model="item.id"/><br />
						<b>Facebook : </b><input type="text" name="facebook" ng-model="item.facebook"/><br />
						<b>Năm sinh : </b><input type="text" name="txtClub" ng-model="item.year_of_birth"/><br />
						<b>Phone : </b><input type="text" name="txtClub" ng-model="item.phone_number"/><br />
					</div>
				</div>
			</div>
		</div>
	</div>	
	
	<script src="<?php echo base_url(); ?>frontend/vendor/js/bootstrap.js"></script>
	<script src="<?php echo base_url(); ?>frontend/vendor/js/fontawesome-all.js"></script>
	<script src="<?php echo base_url(); ?>frontend/vendor/js/angular-1.5.min.js"></script>
	<script type="text/javascript" src="<?php echo base_url(); ?>frontend/vendor/js/angular-animate.min.js"></script>
  	<script type="text/javascript" src="<?php echo base_url(); ?>frontend/vendor/js/angular-aria.min.js"></script>
 	<script type="text/javascript" src="<?php echo base_url(); ?>frontend/vendor/js/angular-messages.min.js"></script>
 	<script type="text/javascript" src="<?php echo base_url(); ?>frontend/vendor/js/angular-material.min.js"></script> 
	<script src="<?php echo base_url(); ?>frontend/vendor/js/1.js"></script>
</body>
</html>