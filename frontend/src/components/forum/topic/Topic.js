import "./Topic.css";
import Typography from "@mui/material/Typography";

export default function Topic({ prop }) {
  console.warn("topic::::::", prop);
  return (
    <div className="topicContainer">
      <h3>{prop.subject}</h3>
      <p>{prop.content}</p>
    </div>
  );
}
