package com.cpr.technotogether.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_goals")
public class GoalEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int goalid;
	private String learninggoals;
	
	public GoalEntity() { }

	public GoalEntity(int goalid, String learninggoals) {
		super();
		this.goalid = goalid;
		this.learninggoals = learninggoals;
	}

	public int getGoalid() {
		return goalid;
	}

	public String getLearninggoals() {
		return learninggoals;
	}

	public void setLearninggoals(String learninggoals) {
		this.learninggoals = learninggoals;
	}
}
