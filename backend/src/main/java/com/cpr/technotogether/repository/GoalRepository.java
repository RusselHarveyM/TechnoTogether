package com.cpr.technotogether.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpr.technotogether.entity.GoalEntity;

@Repository
public interface GoalRepository extends JpaRepository<GoalEntity, Integer> {

}
