package com.cpr.technotogether.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpr.technotogether.entity.GoalEntity;
import com.cpr.technotogether.service.GoalService;

@RestController
@RequestMapping("/goal")
public class GoalController {

	@Autowired
	GoalService gserv;
	
	// Create or insert a goal
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/postGoal")
	public GoalEntity insertGoal(@RequestBody GoalEntity goal) {
		return gserv.insertGoal(goal);
	}
	
	// Read all records
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/getAllGoals")
	public List<GoalEntity> getAllGoals() {
		return gserv.getAllGoals();
	}
		
	// Update a goal
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/putGoal")
	public GoalEntity putGoal(@RequestParam int goalid, @RequestBody GoalEntity newGoalDetails) throws Exception {
		return gserv.putGoal(goalid, newGoalDetails);
	}
		
	// Delete goal
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/deleteGoal/{goalid}")
	public String deleteGoal(@PathVariable int goalid) {
		return gserv.deleteGoal(goalid);
	}
}
