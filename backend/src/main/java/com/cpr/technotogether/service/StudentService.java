package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class StudentService {
    private StudentRepository srepo;

    @Autowired
    public StudentService(StudentRepository srepo) {
        this.srepo = srepo;
    }
    
    //Create a student record
    public StudentEntity postStudent(StudentEntity student){
        return srepo.save(student);
    }
    
    //Read a student record by username
    public StudentEntity findByUsername(String username){
    	if(srepo.findByUsername(username) != null)
			return srepo.findByUsername(username);
		else
			return null;
    }

	public StudentEntity findById(int id){
		Optional<StudentEntity> result = srepo.findById(id);

		StudentEntity studentEntity = null;

		if(result.isPresent()){
			studentEntity = result.get();
		}else{
			throw new RuntimeException("Not found");
		}
		return studentEntity;
	}
    
    //Read all students records from tbl_student
    public List<StudentEntity> getAllStudents(){
		return srepo.findAll();
	}

    //U - Update a student record
  	@SuppressWarnings("finally")
  	public StudentEntity putStudent(String username, StudentEntity newStudentDetails) throws Exception{
  		StudentEntity student = new StudentEntity();
  		
  		try { 
  			//Step 1 -search the id number of the student
  			student = srepo.findByUsername(username);//findById() is a pre-defined method
  			
  			//Step 2 - Update the record
  			student.setPoints(newStudentDetails.getPoints());
  			
  		}catch(NoSuchElementException nex) {
  			throw new Exception("Username " + username + "does not exist");
  		}finally {
  			//Step 3 - Save the the information and return the value
  			return srepo.save(student);
  		}
  	}
  	
  	@SuppressWarnings("unused")
	public String deleteByUsername(String username){
        StudentEntity student = findByUsername(username);
        String msg;
        if(srepo.findByUsername(username) != null) {	//step 1 - find the record
			srepo.deleteByUsername(username); 			//step 2 - delete the record
			msg = "Student username " + username + " is successfully deleted";
		}
		else {
			msg = "Student username " + username + " is NOT FOUND";
		}
		return msg;
  		//return srepo.deleteByUsername(username);
    }

}
