package com.cpr.technotogether.entity;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "tbl_Chat")
public class ChatEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String security;
	
	@ManyToOne
	@JoinColumn(name = "creator")
	StudentEntity creator;
	
	@ManyToMany
	@JoinTable(
			name = "chat_member",
			joinColumns = @JoinColumn(name = "chat_id"),
			inverseJoinColumns = @JoinColumn(name = "user_username")
	)
	private Set<StudentEntity> members;

	public ChatEntity() {}
	public ChatEntity(int id, String name, String security, com.cpr.technotogether.entity.StudentEntity creator,
			Set<com.cpr.technotogether.entity.StudentEntity> members) {
		super();
		this.id = id;
		this.name = name;
		this.security = security;
		this.creator = creator;
		this.members = members;
	}

	@Override
	public String toString() {
		return "ChatEntity [id=" + id + ", name=" + name + ", security=" + security + ", creator=" + creator
				+ ", members=" + members + "]";
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSecurity() {
		return security;
	}

	public void setSecurity(String security) {
		this.security = security;
	}

	public StudentEntity getCreator() {
		return creator;
	}

	public void setCreator(StudentEntity creator) {
		this.creator = creator;
	}

	public Set<StudentEntity> getMembers() {
		return members;
	}

	public void setMembers(Set<StudentEntity> members) {
		this.members = members;
	}
}
