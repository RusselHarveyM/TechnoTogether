package com.cpr.technotogether.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_student")
public class StudentEntity {

    @Id
    private String firstname;
    
    private String middlename;
    
    private String lastname;
    
    private int age;
    
    private String address;
    
    private int phonenumber;
    
    @Column(name = "username")
    private String username;
    
    @Column(name = "u_password")
    private String password;
    
    private String email;
    
    @Column(name = "u_identification")
    private String identification;
    
    private int points;

	public StudentEntity(String firstname, String middlename, String lastname, int age, String address, int phonenumber,
			String username, String password, String email, String identification, int points) {
		super();
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
		this.age = age;
		this.address = address;
		this.phonenumber = phonenumber;
		this.username = username;
		this.password = password;
		this.email = email;
		this.identification = identification;
		this.points = points;
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(int phonenumber) {
		this.phonenumber = phonenumber;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getIdentification() {
		return identification;
	}

	public void setIdentification(String identification) {
		this.identification = identification;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}
    
}
