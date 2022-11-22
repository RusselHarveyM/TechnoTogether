package com.cpr.technotogether.entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tbl_topic_reply")
public class TopicReplyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_id")
    private int id;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private LocalDateTime date_sent;

    private String message;

    @ManyToOne(cascade={
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH,
    })
    @JoinColumn(name = "id")
    private StudentEntity user;

    @ManyToOne(cascade={
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH,
    })
    @JoinColumn(name = "topic_id")
    private ForumTopicEntity topic;

    public TopicReplyEntity(){}

    public TopicReplyEntity(int id, LocalDateTime date_sent, String message, StudentEntity student, ForumTopicEntity topic) {
        this.id = id;
        this.date_sent = date_sent;
        this.message = message;
        this.user = student;
        this.topic = topic;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getDate_sent() {
        return date_sent;
    }

    public void setDate_sent(LocalDateTime date_sent) {
        this.date_sent = date_sent;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public StudentEntity getUser() {
        return user;
    }

    public void setUser(StudentEntity user) {
        this.user = user;
    }

    public ForumTopicEntity getTopic() {
        return topic;
    }

    public void setTopic(ForumTopicEntity topic) {
        this.topic = topic;
    }
}
