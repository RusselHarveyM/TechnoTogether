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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Forum() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
        </p>
      </article>
      <section className="forum_out_section">Lorem</section>
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
              value={value}
              onChange={handleChange}
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Forum;
