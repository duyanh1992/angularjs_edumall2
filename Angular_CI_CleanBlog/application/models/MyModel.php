<?php  
class MyModel extends CI_Model{
	public function getAboutData(){
		// List column:
		$this->db->select('*');

		// Select table:
		$data = $this->db->get('about_page');

		// Convert data to array:
		$data = $data->result_array();

		return $data;
	}
}
?>