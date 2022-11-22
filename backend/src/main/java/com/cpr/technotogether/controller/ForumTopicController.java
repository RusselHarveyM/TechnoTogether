package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.ForumTopicEntity;
import com.cpr.technotogether.service.ForumTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/forum_topic")
public class ForumTopicController {
    @Autowired
    private ForumTopicService ftserv;

    @GetMapping("/getTopic")
    public ForumTopicEntity findTopic(@RequestParam("id")int id){
        return ftserv.findById(id);
    }

    @PostMapping("/addTopic")
    public void addTopic(@RequestBody()ForumTopicEntity topic){
        ftserv.addForumTopic(topic);
    }

    @DeleteMapping("/deleteTopic")
    public void deleteTopic(@RequestParam("id")int id){
        ftserv.deleteById(id);
    }

    @PutMapping("/updateTopic")
    public void updateTopic(@RequestBody()ForumTopicEntity forumTopic ){
        ftserv.updateTopic(forumTopic);
    }

}
