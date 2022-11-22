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

import com.cpr.technotogether.entity.ChannelMessageEntity;
import com.cpr.technotogether.service.ChannelMessageService;

@RestController
@RequestMapping("channelMessage")
public class ChannelMessageController {

	@Autowired
	ChannelMessageService cmserv;
	
	    //Create or insert a channel record
		@PostMapping("/postChannelMessage")
		public ChannelMessageEntity insertChannelMessage(@RequestBody ChannelMessageEntity channelMessage) {
			return cmserv.insertChannelMessage(channelMessage);
		}
		
		
		//Update Record
		@PutMapping("/putChannelMessage")
		public ChannelMessageEntity putChannelMessage(@RequestParam int id, @RequestBody ChannelMessageEntity newChannelMessageDetails)throws Exception {
			return cmserv.putChannelMessage(id, newChannelMessageDetails);
		}
		
		//Delete Record
		@DeleteMapping("/deleteChannel/{id}")
		public String deleteChannelMessage(@PathVariable int id) {
			return cmserv.deleteChannelMessage(id);
		}
}
