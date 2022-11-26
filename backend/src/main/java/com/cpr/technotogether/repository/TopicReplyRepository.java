package com.cpr.technotogether.repository;

import com.cpr.technotogether.entity.TopicReplyEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TopicReplyRepository extends JpaRepository<TopicReplyEntity, Integer> {
    Page<TopicReplyEntity> findByTopic_TopicId(int topic_id, Pageable pageable);
    Optional<TopicReplyEntity> findByReplyIdAndTopic_TopicId(int topic_id, int reply_id);

    Page<TopicReplyEntity> findByUser_Id(int user_id, Pageable pageable);
    Optional<TopicReplyEntity> findByReplyIdAndUser_Id(int user_id, int reply_id);
}

