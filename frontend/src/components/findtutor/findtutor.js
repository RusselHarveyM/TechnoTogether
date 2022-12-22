import React from "react";
import "./Findtutor.css";
import CardRecipe from "./CardRecipe";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/system";
import RangeSliderPrice from "./pricefilter";
import RadioButtonsSchedule from "./schedulefilter";
import SearchBar1 from "./SearchBar1";
import SelectStudentLevel from "./SelectStudentLevel";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Findtutor() {
  return (
  <>
    <div className="main">
        <SearchBar1/>
    <div className="WholeContainer">
    <div className="CardContainerFilter">
    <Stack
  direction={{ xs: 'row', sm: 'column' }}
  spacing={{ xs: 3, sm: 2, md: 1 }}
  alignItems="left"
>
  <Item><RangeSliderPrice/></Item>
  <Item><SelectStudentLevel/></Item>
  <Item><RadioButtonsSchedule/></Item>
  
</Stack>
    </div>
<div className="CardContainer" >
<CardRecipe/>
</div>

    </div>
   
    </div>
    </>
  );
}

export default Findtutor;
