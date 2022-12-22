import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./TopicElement.css";
import Reply from "../topicElement/replies/Reply";

export default function TopicElement() {
  const [topic, setTopic] = useState();
  const [replies, setReplies] = useState();

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
      </div>
    );
  }
}
