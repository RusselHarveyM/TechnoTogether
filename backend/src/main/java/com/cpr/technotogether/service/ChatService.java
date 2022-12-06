package com.cpr.technotogether.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.cpr.technotogether.entity.ChatEntity;
import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.repository.ChatRepository;
import com.cpr.technotogether.repository.StudentRepository;

@Service
public class ChatService {

	@Autowired
	ChatRepository crepo;
	@Autowired
	StudentRepository srepo;
	public ChatService(ChatRepository crepo, StudentRepository srepo) {
		this.crepo = crepo;
		this.srepo = srepo;
	}
	
	
	public ChatEntity createChat(String creator,ChatEntity newChat) {
		StudentEntity creator1 = new StudentEntity();
		creator1 = srepo.findByUsername(creator);
		newChat.setCreator(creator1);
		return crepo.save(newChat);
	}
	
	public List<ChatEntity> getAllChat(){
		return crepo.findAll();
	}
	
	@SuppressWarnings("finally")
	public ChatEntity updateChat(int id, ChatEntity newChat) throws Exception{
		ChatEntity chat = new ChatEntity();
		
		try {
			if(crepo.findById(id) != null) {
				chat = crepo.findById(id).get();
				chat.setName(newChat.getName());
				chat.setSecurity(newChat.getSecurity());
			}else {
				throw new NoSuchElementException();
			}
			
		}catch(NoSuchElementException e) {
			throw new Exception("ID Number " + id + "does not exist");
		}finally {
			return crepo.save(chat);
		}
	}
	
	public String deleteChat(int id) {
	String msg;
		
		if(crepo.findById(id) != null) {	
			crepo.deleteById(id); 		
			
			msg = "Chat ID Number " + id + " is successfully deleted";
		}
		else {
			msg = "Chat ID Number " + id + " is NOT FOUND";

		}
		
		return msg;
	}
}


