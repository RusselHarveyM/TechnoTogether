import "./Topic.css";
import Typography from "@mui/material/Typography";

export default function Topic({ prop }) {
  if (typeof prop !== "undefined")
    return (
      <div className="topicContainer">
        <h3>{prop.subject}</h3>
        <p>{prop.content}</p>
      </div>
    );
}
