import React from "react";
import "./Forum.css";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  borderRadius: 5,
  gap: 5,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

const submitButtonStyle = {
  bgcolor: "#413E3E",
  color: "#ffa500",
  borderRadius: 2,

  "&:hover": {
    color: "#413E3E",
    backgroundColor: "#ffa500",
  },
};

function Forum() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [subjectValue, setSubjectValue] = React.useState("");
  const [contentValue, setContentValue] = React.useState("");

  const handleSubjectChange = (event) => {
    setSubjectValue(event.target.value);
  };
  const handleContentChange = (event) => {
    setContentValue(event.target.value);
  };

  return (
    <>
      <nav className="forum_nav">
        <button id="newTopic_Btn" onClick={handleOpen}>
          <Icon id="addSign">add_circle</Icon>
          Start New Topic
        </button>
        <Link id="discoverSpcs_Btn">Discover Spaces</Link>
      </nav>
      <article className="forum_article">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          delectus beatae excepturi reiciendis atque. Aliquam facilis minus
          earum sed! Laboriosam voluptates dolor eos possimus facere repudiandae
          mollitia doloribus molestias! Blanditiis! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Officiis dolorum nihil rerum, ipsam qui
          temporibus ex vitae dolore inventore quaerat. Laudantium facilis
          distinctio enim. Doloremque minus dignissimos qui officia eveniet?
        </p>
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add New Topic
            </Typography>
            <TextField
              id="outlined-multiline-flexible"
              label="Subject"
              multiline
              maxRows={4}
              value={subjectValue}
              onChange={handleSubjectChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={5}
              value={contentValue}
              onChange={handleContentChange}
            />
            <Button variant="contained" size="large" sx={submitButtonStyle}>
              create
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Forum;
