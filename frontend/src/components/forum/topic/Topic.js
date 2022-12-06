import "./Topic.css";

export default function Topic(topic) {
  console.warn("topic::::::", topic);
  return (
    <div className="topicContainer">
      <h1>{topic[0].subject}</h1>
    </div>
  );
}
