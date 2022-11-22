package com.cpr.technotogether.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cpr.technotogether.entity.ChannelEntity;

public interface ChannelRepository extends JpaRepository<ChannelEntity, Integer>{
	ChannelEntity findByChannel_name(String channel_name);
}
