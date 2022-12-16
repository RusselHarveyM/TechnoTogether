package com.cpr.technotogether.repository;

import com.cpr.technotogether.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface StudentRepository extends JpaRepository<StudentEntity, Integer> {
	StudentEntity findByUsername(String username);
	int deleteByUsername(String username);
}
