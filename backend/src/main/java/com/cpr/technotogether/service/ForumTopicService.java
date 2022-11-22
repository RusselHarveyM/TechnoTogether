package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.ForumTopicEntity;
import com.cpr.technotogether.entity.SoloSpaceEntity;
import com.cpr.technotogether.repository.ForumTopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void deleteById(int id){
        ForumTopicEntity forumTopicEntity = findById(id);
        if(forumTopicEntity != null){
            ftrepo.delete(forumTopicEntity);
        }
    }

    public void updateTopic(ForumTopicEntity forumTopic){
        ftrepo.save(forumTopic);
    }
}
