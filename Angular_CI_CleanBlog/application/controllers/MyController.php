<?php
class MyController extends CI_Controller{
	function __construct(){
		parent::__construct();
		$this->load->database();
	}

	public function index(){
		echo 'Freetuts.net Hello Controller';
	}

	public function getAboutData(){
		$this->load->model('MyModel');

		$data = $this->MyModel->getAboutData();
		echo json_encode($data);
	}
}
?>