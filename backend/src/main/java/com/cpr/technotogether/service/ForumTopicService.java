package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.ForumTopicEntity;
import com.cpr.technotogether.repository.ForumTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class ForumTopicService {
    @Autowired
    private ForumTopicRepository ftrepo;

    public ForumTopicEntity addForumTopic(ForumTopicEntity forumTopic){
        return ftrepo.save(forumTopic);
    }

    public ForumTopicEntity findById(int id){
        Optional<ForumTopicEntity> result = ftrepo.findById(id);

        ForumTopicEntity forumTopicEntity = null;

        if(result.isPresent()){
            forumTopicEntity = result.get();
        }else{
            throw new RuntimeException("Not found");
        }
        return forumTopicEntity;
    }

    public List<ForumTopicEntity> findAll(){
        return ftrepo.findAll();
    }

    public void deleteById(int id){
        ForumTopicEntity forumTopicEntity = findById(id);
        if(forumTopicEntity != null){
            ftrepo.delete(forumTopicEntity);
        }
    }

    public ForumTopicEntity updateTopic(int topic_id, ForumTopicEntity forumTopic ){
        return ftrepo.findById(topic_id).map(post -> {
            post.setSubject(forumTopic.getSubject());
            return ftrepo.save(post);
        }).orElseThrow(() -> new RuntimeException("TopicId " + topic_id + " not found"));
    }
}
