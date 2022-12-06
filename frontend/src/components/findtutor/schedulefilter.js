import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsSchedule() {
  return (
    <FormControl>
      <FormLabel id="schedule-radio-buttons-group-label">Availability</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="sunday"
        name="radio-buttons-group"
      >
        <FormControlLabel value="sunday"   control={<Radio />}  label="Sunday"   />
        <FormControlLabel value="monday"   control={<Radio />}  label="Monday"   />
        <FormControlLabel value="tuesday"   control={<Radio />} label="Tuesday"  />
        <FormControlLabel value="wednesday"  control={<Radio />}label="Wednesday"/>
        <FormControlLabel value="thursday"  control={<Radio />} label="Thursday"  />
        <FormControlLabel value="friday"     control={<Radio />}label="Friday"   />
        <FormControlLabel value="saturday"  control={<Radio />} label="Saturday"  />
      </RadioGroup>
    </FormControl>
  );
}