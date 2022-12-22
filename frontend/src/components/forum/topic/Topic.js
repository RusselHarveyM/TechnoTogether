import "./Topic.css";
import { Link } from "react-router-dom";

export default function Topic(prop) {
  if (typeof prop !== "undefined")
    return (
      <div>
        <Link to={`topic/${prop.topics.topicId}`} className="topicContainer">
          <h3>{prop.topics.subject}</h3>
          <p>{prop.topics.content}</p>
        </Link>
      </div>
    );
}
