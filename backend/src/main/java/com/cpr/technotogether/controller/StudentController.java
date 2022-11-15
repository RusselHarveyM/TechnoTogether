package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StudentController {
    private StudentService sserv;

    @Autowired
    public StudentController(StudentService sserv) {
        this.sserv = sserv;
    }

    @GetMapping("/getStudent")
    public StudentEntity findByUsername(@RequestParam("Username")String username){
        return sserv.findByUsername(username);
    }

    @PostMapping("/addStudent")
    public void addStudent(@RequestBody()StudentEntity student){
        sserv.createStudent(student);
    }
}