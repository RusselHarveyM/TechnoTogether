package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.TopicReplyEntity;
import com.cpr.technotogether.service.TopicReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/topic_reply")
public class TopicReplyController {
    @Autowired
    private TopicReplyService trserv;

    @GetMapping("/getReply")
    public TopicReplyEntity findReply(@RequestParam("id")int id){
        return trserv.findById(id);
    }

    @PostMapping("/addReply")
    public void addReply(@RequestBody()TopicReplyEntity reply){
        trserv.addTopicReply(reply);
    }

    @DeleteMapping("/deleteReply")
    public void deleteTopic(@RequestParam("id")int id){
        trserv.deleteById(id);
    }

    @PutMapping("/updateReply")
    public void updateReply(@RequestBody()TopicReplyEntity reply ){
        trserv.updateReply(reply);
    }
}
