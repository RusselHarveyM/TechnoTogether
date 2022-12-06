package com.cpr.technotogether.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cpr.technotogether.entity.ChatEntity;

@Repository
public interface ChatRepository extends JpaRepository<ChatEntity, Integer>{

}
