package com.cpr.technotogether.repository;


import com.cpr.technotogether.entity.ForumTopicEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForumTopicRepository extends JpaRepository<ForumTopicEntity, Integer> {
}
