package com.cpr.technotogether.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cpr.technotogether.entity.ChannelEntity;
import com.cpr.technotogether.service.ChannelService;

@RestController
@RequestMapping("channel")
public class ChannelController {

	@Autowired
	ChannelService cserv;	
	
	//Create or insert a channel record
	@PostMapping("/postChannel")
	public ChannelEntity insertStudent(@RequestBody ChannelEntity channel) {
		return cserv.insertChannel(channel);
	}
	
	//Read all records
	@GetMapping("/getAllChannels")
	public List<ChannelEntity> getAllChannels(){
		return cserv.getAllChannels();
	}
	
	//Update Record
	@PutMapping("/putChannel")
	public ChannelEntity putChannel(@RequestParam int id, @RequestBody ChannelEntity newChannelDetails)throws Exception {
		return cserv.putChannel(id, newChannelDetails);
	}
	
	//Delete Record
	@DeleteMapping("/deleteChannel/{id}")
	public String deleteChannel(@PathVariable int id) {
		return cserv.deleteChannel(id);
	}
}
