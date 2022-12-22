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
	private boolean completed;
	
	public GoalEntity() { }

	public GoalEntity(int goalid, String learninggoals, boolean completed) {
		super();
		this.goalid = goalid;
		this.learninggoals = learninggoals;
		this.completed = completed;
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

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
}
