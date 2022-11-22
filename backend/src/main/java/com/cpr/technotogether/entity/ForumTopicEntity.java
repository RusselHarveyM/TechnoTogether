package com.cpr.technotogether.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_forum_topic")
public class ForumTopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int topic_id;

    @Column(name = "topic_subject")
    private String subject;

    public ForumTopicEntity(){}

    public ForumTopicEntity(int topic_id, String subject) {
        this.topic_id = topic_id;
        this.subject = subject;
    }

    public int getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(int topic_id) {
        this.topic_id = topic_id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}
