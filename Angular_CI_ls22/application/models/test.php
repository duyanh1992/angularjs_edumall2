<?php
class Test extends CI_Model{
	public function getAllData(){
		// List column:
		$this->db->select('*');
		
		// Select table:
		$data = $this->db->get('member');
		
		//Convert data to array:
		$data = $data->result_array();
		
		return $data;
	}
	
	public function editUser($id, $facebook, $year, $phone, $name){
		$data = array(
					'id'=>$id,
					'name'=>$name,
					'facebook'=>$facebook,
					'year_of_birth'=>$year,
					'phone_number'=>$phone,
				);
		
		$this->db->where('id', $id);
		$this->db->update('member', $data);
		if($this->db->affected_rows() > 0){
			return 'Successful !!!';
		}
		else{
			return 'Failed !!!';
		}
	}
}
?>