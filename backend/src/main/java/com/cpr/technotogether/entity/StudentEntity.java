package com.cpr.technotogether.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_user")
public class StudentEntity {
	 	@Id
		@Column(name = "user_id")
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;

		private String username;

		private String firstname;

		private String middlename;

		private String lastname;

	    private String email;

	    @Column(name = "u_password")
	    private String password;

	    private int points;
	@Column(name = "u_organization")
	    private String organization;

	public StudentEntity() {
	}

	public StudentEntity(int id, String username, String firstname, String middlename, String lastname, String email, String password, int points, String organization) {
		this.id = id;
		this.username = username;
		this.firstname = firstname;
		this.middlename = middlename;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.points = points;
		this.organization = organization;
	}

	@Override
	public String toString() {
		return "StudentEntity{" +
				"firstname='" + firstname + '\'' +
				", middlename='" + middlename + '\'' +
				", lastname='" + lastname + '\'' +
				'}';
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
