import React from "react";
import "./Findtutor.css";
import CardRecipe from './CardRecipe'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Stack } from "@mui/system";
import RangeSliderPrice from "./pricefilter";
import RadioButtonsSchedule from "./schedulefilter";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Findtutor() {
  return (
    <>
    <div className="WholeContainer">
    <div className="CardContainerFilter">
    <Stack
  direction={{ xs: 'row', sm: 'column' }}
  spacing={{ xs: 3, sm: 2, md: 1 }}
  alignItems="left"
>
  <Item><RangeSliderPrice/></Item>
  <Item><RadioButtonsSchedule/></Item>
  
</Stack>
    </div>
<div className="CardContainer" >
<Stack
  direction={{ xs: 'row', sm: 'column' }}
  spacing={{ xs: 3, sm: 2, md: 1 }}
  alignItems="center"
>
  <Item><CardRecipe/></Item>
  <Item><CardRecipe/></Item>
  <Item><CardRecipe/></Item>
  
</Stack>
</div>

    </div>
   

    </>
  );
 
}

export default Findtutor;