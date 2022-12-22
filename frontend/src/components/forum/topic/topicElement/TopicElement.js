import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./TopicElement.css";
import Reply from "../topicElement/replies/Reply";
import { format } from "date-fns";
import TextField from "@mui/material/TextField";

export default function TopicElement() {
  const [topic, setTopic] = useState();
  const [replies, setReplies] = useState();
  const [message, setMessage] = useState();
  const [date, setDate] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      let topic = await fetch(
        `http://localhost:8080/forum_topic/getTopic?id=${id}`
      );
      topic = await topic.json();
      setTopic(topic);
    }
    fetchData();
  });

  useEffect(() => {
    async function fetchData() {
      let rep = await fetch(
        `http://localhost:8080/topic_reply/topics/topic/${id}/replies`
      );
      rep = await rep.json();
      setReplies(rep);
    }
    fetchData();
  });

  const submitHandler = (e) => {
    console.warn("submitted :::::: " + date);
    const date_sent = date;

    e.preventDefault();
    fetch(`http://localhost:8080/topic_reply/posts/${id}/${4}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date_sent, message }),
    }).then(() => {
      console.log("new reply added");
    });
  };

  if (typeof topic !== "undefined" && typeof replies !== "undefined") {
    const reply_content = replies.content;
    return (
      <div className="topicElementContainer">
        <div className="topicD">
          <h1 className="topicSubject">
            {topic.subject} <sup>unsolved</sup>{" "}
          </h1>
          <p className="topicContent">{topic.content}</p>
        </div>
        <div className="repliesContainer">
          {reply_content.map((reply) => (
            <Reply rep={reply} />
          ))}
        </div>
        <form onSubmit={submitHandler} className="replySubmit">
          <TextField
            id="outlined-multiline-flexible"
            label="add new reply"
            name="add new reply"
            required
            multiline
            maxRows={4}
            onChange={(event) => {
              setMessage(event.target.value);
              setDate(format(new Date(), "yyyy-MM-dd kk:mm:ss"));
            }}
            fullWidth
            sx={{ m: 1 }}
          />
          <button id="addTopicBtn">Submit</button>
        </form>
      </div>
    );
  }
}
