package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.service.StudentService;
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

    @GetMapping("/getUser")
    public StudentEntity findByid(@RequestParam("id")int id){
        return sserv.findById(id);
    }

    @PostMapping("/addUser")
    public void addStudent(@RequestBody()StudentEntity student){
        sserv.createStudent(student);
    }

    @DeleteMapping("/deleteUser")
    public void deleteStudent(@RequestParam("id")int id){
        sserv.deleteById(id);
    }

    @PutMapping("/updateUser")
    public void updateStudent(@RequestBody()StudentEntity student ){
        sserv.updateUser(student);
    }
}
