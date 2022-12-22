package com.cpr.technotogether.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpr.technotogether.entity.GoalEntity;
import com.cpr.technotogether.repository.GoalRepository;

@Service
public class GoalService {

	@Autowired
	GoalRepository grepo;
	
	// C - Create or insert a goal
	public GoalEntity insertGoal(GoalEntity goal) {
		return grepo.save(goal);
	} 
	
	// R - Read all records from tbl_goals
		public List<GoalEntity> getAllGoals() {
			return grepo.findAll();
		}
		
		// U - Update a goal
		public GoalEntity putGoal(int goalid, GoalEntity newGoalDetails) throws Exception {
			GoalEntity goal = new GoalEntity();
					
			try {
				goal = grepo.findById(goalid).get();
				
				goal.setLearninggoals(newGoalDetails.getLearninggoals());
						
				return grepo.save(goal);
			} catch (NoSuchElementException nex) {
				throw new Exception("Goal " + goal + " does not exist!");
			} 
		}
		
		// D - Delete goal
		public String deleteGoal(int goalid) {
			String msg;
			if (grepo.findById(goalid) != null) {
				grepo.deleteById(goalid);
				msg = "Goal ID Number " + goalid + " is successfully deleted!";
			} else {
				msg = "Goal ID Number " + goalid + " is NOT found!";
			}
					
			return msg;
		}
}
