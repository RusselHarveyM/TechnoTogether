package com.cpr.technotogether.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {

    @Id
    @Column(name = "username")
    private String username;

    @Column(name = "u_password")
    private String password;

    private String firstname;

    private String middlename;

    private String lastname;

    private int points;

    @Column(name = "u_organization")
    private String organization;

    public StudentEntity(){}

    public StudentEntity(String username, String password, String firstname, String middlename, String lastname, int points, String organization) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.points = points;
        this.organization = organization;
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
}
