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

import com.cpr.technotogether.entity.ChatEntity;
import com.cpr.technotogether.service.ChatService;

@RestController
@RequestMapping("/chat")
public class ChatController {
	
	@Autowired
	private ChatService cserv;
	
	public ChatController(ChatService cserv) {
		this.cserv = cserv;
	}
	
	@PostMapping("/createChat")
	public ChatEntity createChat(@RequestParam()String creator,@RequestBody()ChatEntity chat) {
		return cserv.createChat(creator,chat);
	}
	@GetMapping("/getAllChat")
	public List<ChatEntity> getAllChat(){
		return cserv.getAllChat();
	}
	@PutMapping("/updateChat")
	public ChatEntity updateChat(@RequestParam()int id, @RequestBody()ChatEntity chat) throws Exception {
		return cserv.updateChat(id, chat);
	}
	@DeleteMapping("/deleteChat/{id}")
	public String deleteChat(@PathVariable int id) {
		return cserv.deleteChat(id);
	}

}
