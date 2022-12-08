import React, { useState, useEffect } from "react";
import "./Forum.css";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Topic from "./topic/Topic";

const style = {
  position: "absolute",

  borderRadius: 5,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

function Forum() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [topics, setTopics] = useState([]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      let topicsList = await fetch(
        "http://localhost:8080/forum_topic/getAllTopic"
      );
      topicsList = await topicsList.json();
      setTopics(topicsList);
    }
    fetchData();
  }, []);

  const submitHandler = (e) => {
    console.warn("submitd :::::: ");

    e.preventDefault();
    fetch("http://localhost:8080/forum_topic/addTopic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, content }),
    }).then(() => {
      console.log("new topic added");
    });
  };

  return (
    <div className="forumContainer">
      <nav className="forum_nav">
        <button id="newTopic_Btn" onClick={handleOpen}>
          <Icon id="addSign">add_circle</Icon>
          Start New Topic
        </button>
        <Link id="discoverSpcs_Btn">Discover Spaces</Link>
      </nav>
      <article className="forum_article">
        {topics.map((topic) => (
          <Topic prop={topic} />
        ))}
      </article>
      <section className="forum_out_section"></section>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <form onSubmit={submitHandler} id="forumForm">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add New Topic
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="Subject"
                name="Subject"
                required
                multiline
                maxRows={4}
                value={subject}
                onChange={handleSubjectChange}
              />
              <TextField
                id="outlined-multiline-static"
                label="Content"
                name="Content"
                multiline
                rows={5}
                value={content}
                onChange={handleContentChange}
              />
              <button id="addTopicBtn">create</button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Forum;
