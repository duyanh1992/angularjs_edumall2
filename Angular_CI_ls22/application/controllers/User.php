<?php
class User extends CI_Controller{
	public function getUserData(){
		//load model:
		$this->load->model('test');
		
		//Call to model function to get data:
		$data = $this->test->getAllData();
		
		// Convert data to json
		$data = json_encode($data);
		echo $data;
	}
	
	public function getAllUser(){
		$this->load->view('user_view');
	}
	
	public function editUser(){
		$id = $this->input->post('id');
		$facebook = $this->input->post('facebook');
		$year = $this->input->post('year');
		$phone = $this->input->post('phone');
		$name = $this->input->post('name');
		
		$this->load->model('test');
		echo $flag = $this->test->editUser($id, $facebook, $year, $phone, $name);
	}
}
?>