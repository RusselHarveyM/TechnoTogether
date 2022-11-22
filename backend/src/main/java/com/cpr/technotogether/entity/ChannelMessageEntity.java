package com.cpr.technotogether.entity;

import java.util.Date;

public class ChannelMessageEntity {

	private int message_id;
	private String username;
	private String message;
	private Date date_sent;
	private int channel_id;
	public ChannelMessageEntity(){}
	public ChannelMessageEntity(int message_id, String username, String message, Date date_sent, int channel_id) {
		super();
		this.message_id = message_id;
		this.username = username;
		this.message = message;
		this.date_sent = date_sent;
		this.channel_id = channel_id;
	}
	public int getMessage_id() {
		return message_id;
	}
	/*public void setMessage_id(int message_id) {
		this.message_id = message_id;
	}*/
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getDate_sent() {
		return date_sent;
	}
	public void setDate_sent(Date date_sent) {
		this.date_sent = date_sent;
	}
	public int getChannel_id() {
		return channel_id;
	}
	public void setChannel_id(int channel_id) {
		this.channel_id = channel_id;
	}
	@Override
	public String toString() {
		return "ChannelMessageEntity [message_id=" + message_id + ", username=" + username + ", message=" + message
				+ ", date_sent=" + date_sent + ", channel_id=" + channel_id + "]";
	}
	
}
