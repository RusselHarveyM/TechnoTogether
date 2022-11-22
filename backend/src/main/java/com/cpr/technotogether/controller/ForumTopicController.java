package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.ForumTopicEntity;
import com.cpr.technotogether.entity.SoloSpaceEntity;
import com.cpr.technotogether.service.ForumTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
    public void addTopic(@RequestBody()ForumTopicEntity solospace){
        ftserv.addForumTopic(solospace);
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
