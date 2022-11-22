package com.cpr.technotogether.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cpr.technotogether.entity.ChannelEntity;
import com.cpr.technotogether.repository.ChannelRepository;

@Service
public class ChannelService {

	private ChannelRepository crepo;

	@Autowired
	public ChannelService(ChannelRepository crepo) {
		this.crepo = crepo;
	}
	
	//create
	public ChannelEntity insertChannel(ChannelEntity channel) {
		return crepo.save(channel);
	}
	//read all channel
	public List<ChannelEntity> getAllChannels(){
		return crepo.findAll();
	}
	
	//update
	@SuppressWarnings("finally")
	public ChannelEntity putChannel(int id, ChannelEntity newChannelDetails) throws Exception{
		ChannelEntity channel = new ChannelEntity();
		
		try {
			//steps in updating 
			//Step 1 -search the id number of the channel
			channel = crepo.findById(id).get();//findById()
			//Step 2 - Update the record
			channel.setChannel_name(newChannelDetails.getChannel_name());
			
		}catch(NoSuchElementException nex) {
			throw new Exception("ID Number " + id + "does not exist");
		}finally {
			//Step 3 - Save the the information and return the value
			return crepo.save(channel);
		}
	
	}
	
	//delete channel
	public String deleteChannel(int id) {
		String msg;
	
		if(crepo.findById(id) != null) {	//step 1 - find the record
			crepo.deleteById(id); 			//step 2 - delete the record
			
			msg = "Channel ID Number " + id + " is successfully deleted";
		}
		else {
			msg = "Channel ID Number " + id + " is NOT FOUND";
		}		
		return msg;
	}
	
	
}
