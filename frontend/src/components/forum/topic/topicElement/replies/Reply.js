import "./Reply.css";

export default function Reply(prop) {
  if (typeof prop !== "undefined") {
    return (
        <div className="replyContainer">
          <div>user profile here</div>
          <div className="messageContainer">
            <p className="topic_reply_message">{prop.rep.message}</p>
            <p className="dateTime">{prop.rep.date_sent}</p>
          </div>
        </div>
    );
  }
}
