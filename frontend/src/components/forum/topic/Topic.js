import "./Topic.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function Topic({ prop }) {
  if (typeof prop !== "undefined")
    return (
      <Link className="topicContainer">
        <h3>{prop.subject}</h3>
        <p>{prop.content}</p>
      </Link>
    );
}
