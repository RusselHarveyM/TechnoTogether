package com.cpr.technotogether.entity;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_user")
public class StudentEntity {

    @Id
    private String username;

    @Column(name = "u_password")
    private String password;

    private String firstname;

    private String middlename;

    private String lastname;

    private int points;

    @Column(name = "u_organization")
    private String organization;

    @OneToMany(mappedBy = "user",
                cascade = CascadeType.ALL)
    private List<TopicReplyEntity> reply;

    public StudentEntity(){}

    public StudentEntity(String username, String password, String firstname, String middlename, String lastname, int points, String organization, List<TopicReplyEntity> reply) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.points = points;
        this.organization = organization;
        this.reply = reply;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getMiddlename() {
        return middlename;
    }

    public void setMiddlename(String middlename) {
        this.middlename = middlename;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public List<TopicReplyEntity> getReply() {
        return reply;
    }

    public void setReply(List<TopicReplyEntity> reply) {
        this.reply = reply;
    }
}
