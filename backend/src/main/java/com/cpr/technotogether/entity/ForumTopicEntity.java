package com.cpr.technotogether.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_forum_topic")
public class ForumTopicEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "topic_id")
    private int topicId;

    @Column(name = "topic_subject")
    private String subject;

    @Column(name = "content")
    private String content;

//    @OneToMany(cascade = {
//            CascadeType.DETACH,
//            CascadeType.MERGE,
//            CascadeType.PERSIST,
//            CascadeType.REFRESH
//    })
//    private List<TopicReplyEntity> replies;

    public ForumTopicEntity(){}

    public ForumTopicEntity(int topicId, String subject, String content) {
        this.topicId = topicId;
        this.subject = subject;
        this.content = content;
    }

    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
