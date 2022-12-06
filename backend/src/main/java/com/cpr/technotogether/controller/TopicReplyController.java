package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.entity.TopicReplyEntity;
import com.cpr.technotogether.repository.ForumTopicRepository;
import com.cpr.technotogether.repository.StudentRepository;
import com.cpr.technotogether.repository.TopicReplyRepository;
import com.cpr.technotogether.service.StudentService;
import com.cpr.technotogether.service.TopicReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/topic_reply")
public class TopicReplyController {
    @Autowired
    private TopicReplyService trserv;

    @Autowired
    private TopicReplyRepository trrepo;

    @Autowired
    private ForumTopicRepository ftrepo;

    @Autowired
    private StudentService sserv;

    @GetMapping("/topics/{topic_id}/replies")
    public Page<TopicReplyEntity> getAllRepliesByTopicId(@PathVariable (value = "topic_id") int topic_id,
                                                         Pageable pageable) {
        return trrepo.findByTopic_TopicId(topic_id, pageable);
    }

    @GetMapping("/topics/{user_id}/replies")
    public Page<TopicReplyEntity> getAllRepliesByUserId(@PathVariable (value = "user_id") int user_id,
                                                         Pageable pageable) {
        return trrepo.findByUser_Id(user_id, pageable);
    }

    @PostMapping("/posts/{topic_id}/{user_id}/comments")
    public TopicReplyEntity createReply(@PathVariable (value = "topic_id") int topic_id,
                                        @PathVariable (value = "user_id") int user_id,
                                        @RequestBody TopicReplyEntity reply) {
        return ftrepo.findById(topic_id).map(topic -> {
            reply.setTopic(topic);
            StudentEntity user = sserv.findById(user_id);
            reply.setUser(user);
            return trserv.addTopicReply(reply);
        }).orElseThrow(() -> new RuntimeException("TopicId " + topic_id + " not found"));
    }

    @DeleteMapping("/topics/{topic_id}/replies/{reply_id}")
    public ResponseEntity<?> deleteReply(@PathVariable (value = "topic_id") int topic_id,
                                           @PathVariable (value = "reply_id") int reply_id) {
        return trrepo.findByReplyIdAndTopic_TopicId(reply_id, topic_id).map(reply -> {
            trrepo.delete(reply);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new RuntimeException("Reply not found with id " + reply_id + " and TopicId " + topic_id));
    }

    @PutMapping("/topics/{topic_id}/replies/{reply_id}")
    public TopicReplyEntity updateReply(@PathVariable (value = "topic_id") int topic_id,
                                 @PathVariable (value = "reply_id") int reply_id,
                                 @RequestBody TopicReplyEntity replyRequest) {
        if(!ftrepo.existsById(topic_id)) {
            throw new RuntimeException("TopicId " + topic_id + " not found");
        }

        return trrepo.findById(reply_id).map(reply -> {
            replyRequest.setMessage(replyRequest.getMessage());
            return trrepo.save(replyRequest);
        }).orElseThrow(() -> new RuntimeException("ReplyId " + reply_id + "not found"));
    }
}
