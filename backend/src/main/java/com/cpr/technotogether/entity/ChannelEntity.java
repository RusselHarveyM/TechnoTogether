package com.cpr.technotogether.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_channel")
public class ChannelEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int channelID;
	private String channel_name;
	public ChannelEntity() {}
	public ChannelEntity(int channelID, String channel_name) {
		super();
		this.channelID = channelID;
		this.channel_name = channel_name;
	}
	public int getChannelID() {
		return channelID;
	}
/*	public void setChannelID(int channelID) {
		this.channelID = channelID;
	}*/
	public String getChannel_name() {
		return channel_name;
	}
	public void setChannel_name(String channel_name) {
		this.channel_name = channel_name;
	}
	@Override
	public String toString() {
		return "ChannelEntity [channelID=" + channelID + ", channel_name=" + channel_name + "]";
	}
	

}
