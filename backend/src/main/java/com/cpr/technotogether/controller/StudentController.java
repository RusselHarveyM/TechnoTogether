package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.service.StudentService;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
public class StudentController {
    private StudentService sserv;

    @Autowired
    public StudentController(StudentService sserv) {
        this.sserv = sserv;
    }

    @PostMapping("/postStudent")
    public void postStudent(@RequestBody()StudentEntity student){
        sserv.postStudent(student);
    }
    
    @GetMapping("/getByUsername")
    public StudentEntity findByUsername(@RequestParam("username")String username){
        return sserv.findByUsername(username);
    }
    
    @GetMapping("/getAllStudents")
	public List<StudentEntity> getAllStudents(){
		return sserv.getAllStudents();
	}
    
    /*@PutMapping("/updateUser")
    public void updateStudent(@RequestBody()StudentEntity student ){
        sserv.updateUser(student);
    }*/
    
    @PutMapping("/putStudent")
	public StudentEntity putStudent(@RequestParam String username, @RequestBody StudentEntity newStudentDetails)throws Exception {
		return sserv.putStudent(username, newStudentDetails);
	}
    
    @Transactional
    @DeleteMapping("/deleteStudent")
    public String deleteStudent(@RequestParam("username")String username){
        return sserv.deleteByUsername(username);
    }

}