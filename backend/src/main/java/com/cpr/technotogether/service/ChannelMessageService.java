package com.cpr.technotogether.service;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;

import com.cpr.technotogether.entity.ChannelMessageEntity;
import com.cpr.technotogether.repository.ChannelMessageRepository;

public class ChannelMessageService {

	private ChannelMessageRepository cmrepo;

	@Autowired
	public ChannelMessageService(ChannelMessageRepository cmrepo) {
		this.cmrepo = cmrepo;
	}
	
	//create
	public ChannelMessageEntity insertChannelMessage(ChannelMessageEntity channelMessage) {
		return cmrepo.save(channelMessage);
	}
	
	//update
	@SuppressWarnings("finally")
	public ChannelMessageEntity putChannelMessage(int id, ChannelMessageEntity newChannelMessageDetails) throws Exception{
		ChannelMessageEntity channelMessage = new ChannelMessageEntity();
		
		try {
			//steps in updating 
			//Step 1 -search the id number of the channel message
			channelMessage = cmrepo.findById(id).get();//findById()
			//Step 2 - Update the record
			channelMessage.setUsername(newChannelMessageDetails.getUsername());
			channelMessage.setMessage(newChannelMessageDetails.getMessage());
			channelMessage.setDate_sent(newChannelMessageDetails.getDate_sent());
			channelMessage.setChannel_id(newChannelMessageDetails.getChannel_id());
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist");
		}finally {
			//Step 3 - Save the the information and return the value
			return cmrepo.save(channelMessage);
		}
	
	}
	
	//delete channel message
	public String deleteChannelMessage(int id) {
		String msg;
	
		if(cmrepo.findById(id) != null) {	//step 1 - find the record
			cmrepo.deleteById(id); 			//step 2 - delete the record
			
			msg = "Channel message ID Number " + id + " is successfully deleted";
		}
		else {
			msg = "Channel message ID Number " + id + " is NOT FOUND";
		}		
		return msg;
	}
}
