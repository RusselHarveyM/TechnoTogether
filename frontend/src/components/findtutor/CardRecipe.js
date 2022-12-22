import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from "@mui/material/Rating";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios, { Axios } from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import "./cardRecipe.css";
import {useState,useEffect} from 'react'
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDay()}`;
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
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
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [posts, setPosts] = useState([]);
  const [datas, setDatas] = useState([]);
    const [student, setStudent] = useState("");
  const [tutor, setTutor] = useState("");
  const [date1, setDate1] = useState("2022-12-23");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState(0);
  const [duration, setDuration] = useState(0);
 
  useEffect(()=>{
    axios.get('http://localhost:8080/student/getAllStudents')
    .then(res => {
      console.log(res)
      setDatas(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  })
 /*
  useEffect(()=>{
    Axios.get(`http://localhost:8080/transaction/postTransaction?tutor=${tutor}&student=${student}`)
    .then(res => {
      console.log("Getting from ::::",res.data)
      setPosts(res.data)
    })
    .catch(err => console.log(err))
  }, )

const postData = (e) => {
  e.preventDefault();
  Axios.post(`http://localhost:8080/transaction/postTransaction?tutor=${tutor}&student=${student}`,{
    amount, payment, date1, duration
  }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
}*/
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 


  
    const handlePaymentMethodChange = (event) => {
      setPayment(event.target.value);
    };
    const handleStudentChange = (event) => {
      setStudent(event.target.value);
    };
    const handleTutorChange = (event) => {
      setTutor(event.target.value);
    };
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
    const handleDurationChange = (event) => {
      setDuration(event.target.value);
    };
/*
 Axios.post('http://localhost:8080/transaction/postTransaction',{
       
      }).then(res => console.log('Posting data', res)).catch(err => console.log(err))
 */

    const submitHandler = (e) => {
     
      console.warn("submitd :::::: ");
      e.preventDefault();
      fetch(`http://localhost:8080/transaction/postTransaction?tutor=${tutor}&student=${student}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({amount, payment, date1, duration }),
    }).then(() => {
      console.log("new transaction added added");
      window.location.reload(false);
    });
      };
     


  return (
    datas.map(data=>(
      <div  key ={data.id} className='containercard'>
    <Card  key ={data.id}  sx={{ maxWidth: 750 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={<Rating name="read-only" value={3} readOnly />}
        titleTypographyProps={{ variant: "h5", align: "left" }}
        title={data.username}
        subheaderTypographyProps={{ variant: "h6", align: "left" }}
        subheader={`Accumulated points: ${data.points}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada turpis a nulla scelerisque consequat. Sed sollicitudin sed
            nibh a tempus. Proin ultrices tincidunt sapien, et fermentum ex
            laoreet a. Suspendisse rutrum, augue a volutpat dapibus, libero
            ligula tincidunt ligula, id faucibus lorem turpis sit amet
            felis.volutpat.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Contact</Button>
        <Button size="small" onClick={handleOpen} >Hire Tutor</Button>
        <Modal
        key ={data.id}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style} key ={data.id}>
            <form onSubmit={submitHandler} id="transactionForm" key ={data.id}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Transaction Form
              </Typography>
              <TextField
                id="outlined-multiline-flexible"
                label="PaymentMethod"
                name="PaymentMethod"
                required
                multiline
                maxRows={4}
                value={payment}
                onChange={handlePaymentMethodChange}
              />
                <TextField
                id="outlined-multiline-flexible"
                label="Student"
                name="Student"
                required
                multiline
                maxRows={4}
                value={student}
                onChange={handleStudentChange}
              />

              <TextField
                id="outlined-multiline-flexible"
                label="Tutor"
                name="Tutor"
                required
                multiline
                maxRows={4}
                value={tutor}
                onChange={handleTutorChange}
              />
               <FormControl >
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₱</InputAdornment>}
            label="Amount"
            name="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </FormControl>
                <TextField
                id="outlined-multiline-flexible"
                label="Duration"
                name="Duration"
                required
                multiline
                maxRows={4}
                value={duration}
                onChange={handleDurationChange}
              />

              <button id="addTransactionBtn">create</button>
            </form> 
          </Box>
        </Fade>
      </Modal>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon /> 
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardActions></CardActions>
          <Typography paragraph>About Student</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada turpis a nulla scelerisque consequat. Sed sollicitudin sed
            nibh a tempus. Proin ultrices tincidunt sapien, et fermentum ex
            laoreet a. Suspendisse rutrum, augue a volutpat dapibus, libero
            ligula tincidunt ligula, id faucibus lorem turpis sit amet
            felis.volutpat.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    ))
  );
}
