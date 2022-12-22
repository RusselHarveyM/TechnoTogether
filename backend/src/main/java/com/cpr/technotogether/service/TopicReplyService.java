package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.TopicReplyEntity;
import com.cpr.technotogether.repository.TopicReplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicReplyService {
    @Autowired
    private TopicReplyRepository trrepo;

    public TopicReplyEntity addTopicReply(TopicReplyEntity topicReply){
        return trrepo.save(topicReply);
    }

    public TopicReplyEntity findById(int id){
        Optional<TopicReplyEntity> result = trrepo.findById(id);

        TopicReplyEntity topicReply = null;

        if(result.isPresent()){
            topicReply = result.get();
        }else{
            throw new RuntimeException("Not found");
        }
        return topicReply;
    }

    public void deleteById(int id){
        TopicReplyEntity topicReply = findById(id);
        if(topicReply != null){
            trrepo.delete(topicReply);
        }
    }

    public void updateReply(TopicReplyEntity topicReply){
        trrepo.save(topicReply);
    }
}
