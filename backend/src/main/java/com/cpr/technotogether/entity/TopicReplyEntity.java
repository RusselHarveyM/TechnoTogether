package com.cpr.technotogether.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "tbl_topic_reply")
public class TopicReplyEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reply_id")
    private int replyId;

//    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date date_sent;

    private String message;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private StudentEntity user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "topic_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private ForumTopicEntity topic;

    public TopicReplyEntity(){}

    public TopicReplyEntity(int replyId, Date date_sent, String message, StudentEntity user, ForumTopicEntity topic) {
        this.replyId = replyId;
        this.date_sent = date_sent;
        this.message = message;
        this.user = user;
        this.topic = topic;
    }

    public int getReplyId() {
        return replyId;
    }

    public void setReplyId(int replyId) {
        this.replyId = replyId;
    }

    public Date getDate_sent() {
        return date_sent;
    }

    public void setDate_sent(Date date_sent) {
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
