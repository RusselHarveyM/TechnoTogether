package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {
    private StudentRepository srepo;

    @Autowired
    public StudentService(StudentRepository srepo) {
        this.srepo = srepo;
    }

    public StudentEntity createStudent(StudentEntity student){
        return srepo.save(student);
    }

    public StudentEntity findByUsername(String username){
        Optional<StudentEntity> result = srepo.findById(username);

        StudentEntity studentEntity = null;

        if(result.isPresent()){
            studentEntity = result.get();
        }else{
            throw new RuntimeException("Not found");
        }
        return studentEntity;
    }

    public void deleteByUsername(String username){
        StudentEntity student = findByUsername(username);
        if(student != null){
            srepo.delete(student);
        }
    }

    public void updateUser(StudentEntity student){
        srepo.save(student);
    }

}
