package com.cpr.technotogether.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_forum_topic")
public class ForumTopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private int id;

    @Column(name = "topic_subject")
    private String subject;

    @OneToMany(mappedBy = "topic",
               cascade = CascadeType.ALL)
    private List<TopicReplyEntity> replies;

    public ForumTopicEntity(){}

    public ForumTopicEntity(int id, String subject) {
        this.id = id;
        this.subject = subject;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }
}
