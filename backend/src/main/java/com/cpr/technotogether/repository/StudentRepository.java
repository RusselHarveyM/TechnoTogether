package com.cpr.technotogether.repository;

import com.cpr.technotogether.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<StudentEntity, String> {
	
	StudentEntity findByFirstname(String firstname);
	StudentEntity findByUsername(String username);
	StudentEntity deleteByUsername(String username);
}
