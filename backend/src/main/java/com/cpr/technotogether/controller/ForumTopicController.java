package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.ForumTopicEntity;
import com.cpr.technotogether.service.ForumTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/forum_topic")
public class ForumTopicController {
    @Autowired
    private ForumTopicService ftserv;

    @GetMapping("/getTopic")
    public ForumTopicEntity findTopic(@RequestParam("id")int id){
        return ftserv.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getAllTopic")
    public List<ForumTopicEntity> findAllTopic(){
        return ftserv.findAll();
    }

    @PostMapping("/addTopic")
    public void addTopic(@RequestBody()ForumTopicEntity topic){
        ftserv.addForumTopic(topic);
    }


    @DeleteMapping("/deleteTopic")
    public void deleteTopic(@RequestParam("id")int id){
        ftserv.deleteById(id);
    }

    @PutMapping("/updateTopic/{topic_id}")
    public ForumTopicEntity updateTopic(@PathVariable(value = "topic_id") int topic_id, @RequestBody() ForumTopicEntity forumTopic ){
        return ftserv.updateTopic(topic_id, forumTopic);
    }

}
